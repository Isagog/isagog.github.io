# 0. Base image
FROM node:22-alpine AS base
# Set up pnpm
RUN npm install -g pnpm@9.13
# Set workdir
WORKDIR /app

# 1. Dependencies image
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create unprivileged user
RUN addgroup -g 10003 -S nodejs
RUN adduser -S nextjs -u 10003
# Copy the built files from builder image
COPY --from=builder /app/public ./public
COPY --from=builder /app/content ./content
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Set user
USER nextjs
# Run
ENV PORT=3000
ENV HOSTNAME="0.0.0.0" 
EXPOSE 3000
# VOLUME /app/allowlist.json
CMD node server.js
