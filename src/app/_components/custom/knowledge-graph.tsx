export const KnowledgeGraph = () => (
  <svg
    width="2400"
    height="1400"
    xmlns="http://www.w3.org/2000/svg"
    style={{ backgroundColor: "#0d1c14", fontFamily: "Arial, sans-serif" }}
  >
    <style>{`
      .box {
        fill: #2e3f35;
        stroke: none;
        rx: 10;
      }
      .text {
        font-size: 14px;
        fill: white;
        text-anchor: middle;
      }
      .line {
        stroke: #1eff89;
        stroke-width: 2;
      }
    `}</style>

    {/* SVG content goes here — all rect, text, and line elements with className */}
    <rect
      x="200"
      y="20"
      width="200"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="300.0" y="50.0" className="text">
      Deep Insights
    </text>

    <rect
      x="480"
      y="20"
      width="200"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="580.0" y="50.0" className="text">
      Creative Copy
    </text>

    <rect
      x="760"
      y="20"
      width="200"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="860.0" y="50.0" className="text">
      Qualitative Reviews
    </text>

    <rect
      x="1040"
      y="20"
      width="200"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="1140.0" y="50.0" className="text">
      Exhaustive Reports
    </text>

    <rect
      x="580"
      y="110"
      width="300"
      height="50"
      className="box"
      fill="#10281d"
    />
    <text x="730.0" y="135.0" className="text" fontSize="16">
      OPERATIONAL INTELLIGENCE
    </text>

    <rect
      x="1340"
      y="20"
      width="220"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="1450.0" y="50.0" className="text">
      Personalized AI assistants
    </text>

    <rect
      x="1620"
      y="20"
      width="220"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="1730.0" y="50.0" className="text">
      Informed AI guides
    </text>

    <rect
      x="1900"
      y="20"
      width="220"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="2010.0" y="50.0" className="text">
      Customer Intelligence
    </text>

    <rect
      x="2180"
      y="20"
      width="220"
      height="60"
      className="box"
      fill="#2e3f35"
    />
    <text x="2290.0" y="50.0" className="text">
      Predictive Assessments
    </text>

    <rect
      x="1700"
      y="110"
      width="340"
      height="50"
      className="box"
      fill="#10281d"
    />
    <text x="1870.0" y="135.0" className="text" fontSize="16">
      CUSTOMER & MARKET INTELLIGENCE
    </text>

    <rect
      x="900"
      y="500"
      width="300"
      height="80"
      className="box"
      fill="#1eff89"
    />
    <text x="1050.0" y="532.0" className="text" fill="#0d1c14">
      Knowledge Graph Database
    </text>
    <text x="1050.0" y="548.0" className="text" fill="#0d1c14">
      Your enterprise data organized to reason itself
    </text>

    <rect
      x="900"
      y="700"
      width="300"
      height="60"
      className="box"
      fill="#10281d"
    />
    <text x="1050.0" y="722.0" className="text">
      Expert Ontology Integration
    </text>
    <text x="1050.0" y="738.0" className="text">
      Access your knowledge base through an adaptive ontology
    </text>

    <rect
      x="700"
      y="830"
      width="200"
      height="50"
      className="box"
      fill="#2e3f35"
    />
    <text x="800.0" y="855.0" className="text">
      Entity Extraction
    </text>

    <rect
      x="900"
      y="830"
      width="200"
      height="50"
      className="box"
      fill="#2e3f35"
    />
    <text x="1000.0" y="855.0" className="text">
      Relation Extraction
    </text>

    <rect
      x="1100"
      y="830"
      width="200"
      height="50"
      className="box"
      fill="#2e3f35"
    />
    <text x="1200.0" y="855.0" className="text">
      Attribute Extraction
    </text>

    {/* Data types */}
    <rect
      x="250"
      y="1000"
      width="160"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="330.0" y="1020.0" className="text">
      Text Files
    </text>

    <rect
      x="450"
      y="1000"
      width="160"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="530.0" y="1020.0" className="text">
      Media Files
    </text>

    <rect
      x="650"
      y="1000"
      width="160"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="730.0" y="1020.0" className="text">
      Filing Systems
    </text>

    <rect
      x="950"
      y="1000"
      width="180"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="1040.0" y="1020.0" className="text">
      Messages
    </text>

    <rect
      x="1150"
      y="1000"
      width="180"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="1240.0" y="1020.0" className="text">
      Posts
    </text>

    <rect
      x="1350"
      y="1000"
      width="180"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="1440.0" y="1020.0" className="text">
      Productivity Platforms
    </text>

    <rect
      x="1650"
      y="1000"
      width="200"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="1750.0" y="1020.0" className="text">
      Data Files
    </text>

    <rect
      x="1850"
      y="1000"
      width="200"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="1950.0" y="1020.0" className="text">
      Relational Databases
    </text>

    <rect
      x="2050"
      y="1000"
      width="200"
      height="40"
      className="box"
      fill="#1f2e26"
    />
    <text x="2150.0" y="1020.0" className="text">
      Graph Databases
    </text>

    {/* Data categories */}
    <rect
      x="400"
      y="950"
      width="180"
      height="40"
      className="box"
      fill="#10281d"
    />
    <text x="490.0" y="970.0" className="text">
      UNSTRUCTURED DATA
    </text>

    <rect
      x="1100"
      y="950"
      width="200"
      height="40"
      className="box"
      fill="#10281d"
    />
    <text x="1200.0" y="970.0" className="text">
      SEMI-STRUCTURED DATA
    </text>

    <rect
      x="1800"
      y="950"
      width="200"
      height="40"
      className="box"
      fill="#10281d"
    />
    <text x="1900.0" y="970.0" className="text">
      STRUCTURED DATA
    </text>

    <rect
      x="950"
      y="1140"
      width="300"
      height="60"
      className="box"
      fill="#1eff89"
    />
    <text x="1100.0" y="1162.0" className="text" fill="#0d1c14">
      Access all stored data,
    </text>
    <text x="1100.0" y="1178.0" className="text" fill="#0d1c14">
      in any format, from any source.
    </text>

    {/* Lines */}
    <line x1="1050" y1="500" x2="1050" y2="460" className="line" />
    <line x1="1050" y1="580" x2="1050" y2="700" className="line" />
  </svg>
);
