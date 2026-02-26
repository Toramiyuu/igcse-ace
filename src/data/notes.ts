export interface TopicNote {
  defs?: string[];
  facts?: string[];
  formulae?: string[];
}

export const topicNotes: Record<string, TopicNote> = {
  "ict-theory-topics-1": {
    defs: [
      "Computer system = hardware + software + data working together to perform tasks",
    ],
    facts: [
      "Input → Process → Output → Storage (IPO model)",
      "Embedded systems have dedicated functions (e.g. washing machine controller)",
      "GUI vs CLI: GUI uses icons/windows, CLI uses typed commands",
    ],
  },
  "ict-theory-topics-2": {
    defs: [
      "Input device: hardware that sends data into the computer",
      "Output device: hardware that receives processed data from the computer",
    ],
    facts: [
      "OMR reads pencil marks; OCR reads printed text; MICR reads magnetic ink (cheques)",
      "NFC operates within ~10 cm; RFID can be passive (no battery) or active",
      "Biometrics: fingerprint, iris, voice — used for authentication",
    ],
  },
  "ict-theory-topics-3": {
    defs: [
      "Primary storage: RAM/ROM — directly accessed by CPU; fast, limited",
      "Secondary storage: persistent after power off (HDD, SSD, optical, flash)",
    ],
    facts: [
      "RAM = volatile (loses data without power); ROM = non-volatile",
      "SSD faster than HDD, no moving parts, more expensive per GB",
      "Cloud storage: remote servers accessed via internet",
    ],
  },
  "ict-theory-topics-4": {
    defs: [
      "Network: two or more devices connected to share resources/data",
      "LAN = Local Area Network (single building); WAN = Wide Area Network (multiple sites)",
    ],
    facts: [
      "Bus, star, mesh topologies — star most common in schools",
      "Bandwidth = max data transfer rate; latency = delay",
      "Wi-Fi uses radio waves; Ethernet uses cables",
      "IP address identifies device; MAC address identifies NIC",
    ],
  },
  "ict-theory-topics-5": {
    defs: [
      "ICT effect: social, economic, environmental or ethical impact of information technology",
    ],
    facts: [
      "Teleworking: working from home using ICT — reduces commuting, saves office costs",
      "Online shopping: 24/7 access, global reach; replaces physical stores",
      "E-learning: education via digital platforms; accessible anytime but lacks face-to-face",
      "Digital divide: gap between those with and without access to technology",
      "Health risks of ICT: RSI (repetitive strain), eye strain, obesity from long screen time",
      "Privacy concern: personal data collected by websites and apps",
    ],
  },
  "ict-theory-topics-6": {
    defs: [
      "ICT application: specific use of technology to solve a problem or provide a service",
    ],
    facts: [
      "Finance/banking: online transactions, ATMs, fraud detection algorithms",
      "Healthcare: electronic patient records, diagnostic imaging, robotic surgery",
      "Education: virtual classrooms, interactive whiteboards, online assessments",
      "Retail: EPOS systems, stock management systems, online ordering",
      "Government: e-voting, digital ID, automated tax returns",
      "Transport: GPS navigation, automated ticketing, traffic management",
      "Entertainment: streaming services, virtual reality, online gaming",
    ],
  },
  "ict-theory-topics-7": {
    defs: [
      "Systems Life Cycle: structured process for developing or replacing an information system",
      "Feasibility study: analysis of whether a proposed system is practical and worthwhile",
    ],
    facts: [
      "Stages: Analysis → Design → Development/Testing → Implementation → Evaluation",
      "Analysis: identify problems, gather requirements via interviews, questionnaires, observation",
      "Design: create file structures, user interface mockups, algorithms, and test plans",
      "Testing: use normal, extreme, and erroneous test data to verify the system works correctly",
      "Implementation methods: direct changeover (risky), parallel running (safe, costly), phased/pilot rollout",
      "Evaluation: compare system against original requirements; identify improvements needed",
    ],
  },
  "ict-theory-topics-8": {
    defs: [
      "Encryption: converting data into unreadable form using a key",
      "Firewall: monitors and controls incoming/outgoing network traffic based on rules",
    ],
    facts: [
      "Phishing: fake emails/sites to steal credentials",
      "Strong password: 8+ chars, uppercase, lowercase, number, symbol",
      "Two-factor authentication (2FA) adds extra security layer",
      "Backup: copy stored separately to restore after data loss",
    ],
  },
  "ict-theory-topics-9": {
    defs: [
      "Audience: the intended users of a document, website, or system",
      "Accessibility: design that allows all users, including those with disabilities, to use a system",
    ],
    facts: [
      "Audience factors to consider: age, technical expertise, language, and disability",
      "Accessibility features: alt text for images, adjustable font size, screen reader compatibility",
      "High colour contrast helps visually impaired users read content",
      "Clear navigation benefits beginners; keyboard shortcuts benefit experienced users",
      "Localisation: adapting content for language, currency, and date formats of different regions",
    ],
  },
  "ict-theory-topics-10": {
    defs: [
      "Email: electronic message system using SMTP to send and POP3/IMAP to receive",
      "VoIP: Voice over Internet Protocol — real-time voice communication over the internet",
    ],
    facts: [
      "Email protocols: SMTP (sending), POP3 (download to device), IMAP (sync on server)",
      "Instant messaging: real-time text; video conferencing adds live video and audio",
      "Spam: unsolicited bulk email; phishing is a targeted form of spam",
      "FTP: File Transfer Protocol — transferring files between computers on a network",
      "HTTP transfers web pages; HTTPS adds SSL/TLS encryption for security",
      "Social media: platforms for sharing content; raises concerns about privacy and misinformation",
    ],
  },
  "ict-theory-topics-11": {
    defs: [
      "File: named collection of data stored on a storage medium",
      "Compression: reducing file size by encoding data more efficiently",
    ],
    facts: [
      "Common file types: .docx (document), .pdf (portable), .jpg/.png (images), .mp3 (audio), .csv (data)",
      "Lossless compression: no data lost — exact original recovered (ZIP, PNG)",
      "Lossy compression: some data permanently removed — smaller file but lower quality (JPEG, MP3)",
      "File permissions: read, write, execute — control who can access or modify files",
      "Backup types: full (all files), incremental (changes since last backup), differential (changes since last full)",
      "Hierarchical folder structure organises files in directories and subdirectories",
    ],
  },
  "ict-theory-topics-12": {
    defs: [
      "Pixel: smallest unit of a digital image (picture element)",
      "Resolution: number of pixels per unit area — higher resolution means more detail",
    ],
    facts: [
      "Raster/bitmap images: made of pixels (JPEG, PNG, BMP) — quality degrades when enlarged",
      "Vector images: made of mathematical paths (SVG) — scale without quality loss",
      "Colour depth: bits per pixel; 8-bit = 256 colours; 24-bit = 16.7M colours (true colour)",
      "Higher resolution and colour depth produce larger file sizes",
      "JPEG: lossy, best for photographs; PNG: lossless, supports transparency; GIF: limited colours, supports animation",
    ],
    formulae: [
      "File size (image) = width (px) × height (px) × colour depth (bits)",
    ],
  },
  "ict-theory-topics-13": {
    defs: [
      "Layout: arrangement of text, images, and other elements on a page or screen",
    ],
    facts: [
      "Headers and footers appear on every page — contain page numbers, titles, or dates",
      "Margins: white space around page content; consistent margins look professional",
      "Columns: multi-column layout aids readability for newsletters and newspapers",
      "Templates: pre-designed layouts ensure consistency across a document",
      "House style: an organisation's standard design guide covering fonts, colours, and logo placement",
      "Consistent formatting throughout a document improves readability and professionalism",
    ],
  },
  "ict-theory-topics-14": {
    defs: [
      "Style: named set of formatting attributes (font, size, colour) applied to text",
    ],
    facts: [
      "Paragraph styles (Heading 1, Body Text) maintain a clear visual hierarchy",
      "Applying styles rather than manual formatting makes global changes easy",
      "Serif fonts (e.g. Times New Roman) suit print; sans-serif (e.g. Arial) suit screens",
      "Text formatting attributes include: bold, italic, underline, colour, and alignment",
      "CSS in web design: .class { property: value; } separates style from content",
      "Cascading in CSS: styles inherit from parent elements; more specific rules override less specific ones",
    ],
  },
  "ict-theory-topics-15": {
    defs: [
      "Proofreading: carefully checking a document for errors before publishing or distributing",
      "Spell check: automated tool that compares words against a dictionary",
    ],
    facts: [
      "Spell check finds misspelt words but not wrongly used words (e.g. their vs there)",
      "Grammar check highlights potential grammar issues but is not always accurate",
      "Find and Replace: search for specific text and change it throughout a document",
      "Track Changes: records edits by different users for review and collaborative editing",
      "Validation: checking data meets specific rules (e.g. number within allowed range)",
      "Verification: confirming data was entered correctly (e.g. double-entry, visual check)",
    ],
  },
  "ict-theory-topics-16": {
    defs: [
      "Chart/Graph: visual representation of data to show patterns, trends, and comparisons",
    ],
    facts: [
      "Bar chart: comparing discrete categories — bars should not touch",
      "Line graph: showing trends over time — data points joined by lines",
      "Pie chart: showing proportions of a whole — each slice angle is proportional to the value",
      "Scatter graph: shows correlation between two variables",
      "Every chart must have a title, labelled axes (with units), and a legend if needed",
      "Choosing the right chart type depends on the data type and the message you want to show",
    ],
  },
  "ict-practical-topics-17": {
    defs: [
      "Word processing: creating, editing, and formatting text documents",
      "Mail merge: combining a template document with a data source to produce personalised copies",
    ],
    facts: [
      "Styles: named formatting sets — apply to headings and body text for consistency",
      "Tables: rows and columns to organise data; can have formatted borders and shading",
      "Headers/footers contain page numbers, dates, or document title and appear on every page",
      "Mail merge uses a data source (e.g. CSV/database) with merge fields in the template document",
      "Save as PDF to preserve formatting when sharing with people using different software",
      "Track changes and comments are collaboration tools used during document review",
    ],
  },
  "ict-practical-topics-18": {
    defs: [
      "Database: organised collection of structured data stored and accessed electronically",
      "Query: a request to retrieve or manipulate records in a database that meet specific criteria",
    ],
    facts: [
      "Tables contain records (rows) and fields (columns)",
      "Primary key: unique identifier field in each table (e.g. StudentID) — no duplicates allowed",
      "Foreign key: field that references the primary key of another table — links related tables",
      "Forms: user-friendly interface for entering and viewing data in a table",
      "Reports: formatted output summarising query results for printing or presenting",
      "Wildcards in queries: * matches any number of characters; ? matches a single character",
      "Logical operators: AND, OR, NOT, BETWEEN, LIKE used to filter query results",
    ],
  },
  "ict-practical-topics-19": {
    defs: [
      "Presentation software: tool for creating slideshows (e.g. Microsoft PowerPoint)",
    ],
    facts: [
      "Slide layout: title, content, two-content etc. — choose to suit the slide's purpose",
      "Animation: movement effects applied to individual elements on a slide",
      "Transitions: effects between slides — keep subtle to avoid distracting the audience",
      "Too much text per slide reduces effectiveness; use short bullet points and visuals instead",
      "Slide master: controls the design of all slides — change once, updates automatically",
      "Speaker notes: notes visible only to the presenter, not displayed to the audience",
      "File formats: .pptx (editable), .pdf (portable read-only), .ppsx (auto-play show)",
    ],
  },
  "ict-practical-topics-20": {
    defs: [
      "Cell reference: identifies a cell (e.g. B4); absolute reference locks it ($B$4)",
    ],
    facts: [
      "=IF(condition, true_value, false_value)",
      "=VLOOKUP(lookup_val, table_range, col_index, FALSE)",
      "=COUNTIF(range, criteria)",
      "=SUMIF(range, criteria, sum_range)",
      "Always use cell references in formulae, not hardcoded values",
    ],
  },
  "ict-practical-topics-21": {
    defs: [
      "HTML tag: <tagname>content</tagname>",
      "CSS class: .classname { property: value; }",
    ],
    facts: [
      "Internal CSS: inside <style> tags in <head>",
      "External CSS: separate .css file linked with <link>",
      "div = block element; span = inline element",
      "Class selector (.) applies to multiple elements; id (#) must be unique",
    ],
  },
  "cs-topics1-1": {
    defs: [
      "Bit: single binary digit (0 or 1)",
      "Byte: 8 bits",
      "ASCII: 7-bit standard encoding 128 characters",
    ],
    facts: [
      "Binary to denary: sum of place values (128, 64, 32, 16, 8, 4, 2, 1)",
      "Hex digits: 0–9 then A(10) B(11) C(12) D(13) E(14) F(15)",
      "Convert binary → hex: group into nibbles (4 bits)",
      "Image resolution: more pixels = higher quality, larger file size",
      "Colour depth: bits per pixel; 8-bit = 256 colours; 24-bit = 16.7M colours",
    ],
    formulae: ["File size (image) = width × height × colour depth (bits)"],
  },
  "cs-topics1-2": {
    defs: [
      "Data transmission: the process of sending data between devices or systems",
      "Protocol: agreed set of rules for how data is formatted, sent, and received between systems",
    ],
    facts: [
      "Serial transmission: bits sent one at a time along a single channel — reliable over long distances",
      "Parallel transmission: multiple bits sent simultaneously — faster but only over short distances",
      "Simplex: one direction only (keyboard → computer)",
      "Half-duplex: both directions but not simultaneously (walkie-talkie)",
      "Full-duplex: both directions at the same time (telephone call)",
      "Parity check: an extra parity bit is added so total number of 1s is always even (or odd) to detect errors",
      "Check digit: extra digit calculated from the other digits to detect entry errors (used in ISBN, barcodes)",
    ],
    formulae: [
      "Even parity: total count of 1 bits (data + parity bit) must be even",
    ],
  },
  "cs-topics1-3": {
    defs: [
      "CPU: Central Processing Unit — carries out instructions",
      "RAM: Random Access Memory — volatile, stores running programs/data",
      "ROM: Read-Only Memory — non-volatile, stores boot instructions",
    ],
    facts: [
      "Fetch-Decode-Execute cycle: PC → MAR → MDR → IR → CU → ALU",
      "Clock speed (GHz), number of cores, cache size all affect CPU performance",
      "Cache: small fast memory inside/near CPU; L1 fastest, L3 largest",
    ],
  },
  "cs-topics1-4": {
    defs: [
      "Operating system: software that manages hardware resources and provides an interface for programs",
      "Compiler: translates an entire high-level program into machine code in one step before execution",
    ],
    facts: [
      "OS functions: process management, memory management, file management, device management, user interface",
      "Interpreter: translates and executes high-level code line-by-line — slower but easier to debug",
      "Assembler: converts assembly language (mnemonics like MOV, ADD) into machine code (binary)",
      "High-level language: human-readable (Python, Java) — needs translation; portable across machines",
      "Low-level language: close to machine code (Assembly) — fast but hardware-specific",
      "IDE: Integrated Development Environment provides editor, compiler/interpreter, and debugger in one tool",
    ],
  },
  "cs-topics1-5": {
    defs: [
      "URL: Uniform Resource Locator — the address of a resource on the internet",
      "DNS: Domain Name System — translates human-readable domain names into IP addresses",
    ],
    facts: [
      "HTTP: HyperText Transfer Protocol — transfers web pages; HTTPS adds SSL/TLS encryption",
      "Web browser: client software that sends HTTP requests and renders HTML/CSS/JS responses",
      "Web server: software that responds to HTTP requests by serving files to clients",
      "Cloud computing: using remote servers accessed over the internet for storage, processing, or software",
      "Streaming: data delivered continuously in real time — user does not wait for full download",
      "IoT: Internet of Things — everyday objects with sensors connected to the internet to send/receive data",
    ],
  },
  "cs-topics1-6": {
    defs: [
      "Sensor: device that detects a physical input (temperature, light, motion) and converts it to a signal",
      "Actuator: output device that causes a physical effect in response to a control signal (motor, valve, LED)",
    ],
    facts: [
      "Microcontroller: small computer on a single chip; reads sensors and controls actuators",
      "Feedback loop: sensor readings are used to adjust system behaviour (e.g. thermostat)",
      "Robotics: programmable machines that use sensors and actuators to interact with the physical world",
      "Artificial Intelligence: systems that perform tasks normally needing human intelligence (recognition, decisions)",
      "Machine learning: AI systems that learn and improve by being trained on large sets of data",
      "Expert systems: simulate the decision-making of a human expert using a knowledge base and rules",
    ],
  },
  "cs-topics2-7": {
    defs: [
      "Algorithm: step-by-step solution to a problem",
      "Decomposition: breaking a problem into smaller sub-problems",
      "Abstraction: removing unnecessary detail to focus on what matters",
    ],
    facts: [
      "Pseudocode uses plain English structure — no fixed syntax",
      "Flowchart shapes: oval=start/end, parallelogram=I/O, rectangle=process, diamond=decision",
      "Trace table: manually follow through algorithm tracking variable values",
    ],
  },
  "cs-topics2-8": {
    defs: [
      "Variable: named storage location whose value can change",
      "Constant: named value that cannot change during execution",
    ],
    facts: [
      "FOR loop: known number of iterations",
      "WHILE loop: pre-condition check",
      "REPEAT-UNTIL: post-condition (always runs at least once)",
      "Procedure: named block of code, no return value",
      "Function: named block, returns a value",
      "Array index starts at 0 (usually)",
    ],
    formulae: ["Array declaration: DECLARE name : ARRAY[0:n-1] OF DataType"],
  },
  "cs-topics2-9": {
    defs: [
      "DBMS: Database Management System — software that creates, manages, and provides access to databases",
      "Primary key: a field that uniquely identifies every record in a table — no two records can have the same value",
    ],
    facts: [
      "Table: organises data into rows (records) and columns (fields)",
      "Foreign key: a field in one table that references the primary key of another table — links related data",
      "SELECT fieldnames FROM table WHERE condition: basic SQL query structure to retrieve data",
      "INSERT INTO table VALUES (…): SQL command to add a new record",
      "UPDATE table SET field=value WHERE condition: SQL to modify existing records",
      "DELETE FROM table WHERE condition: SQL to remove records",
      "ORDER BY field ASC/DESC: sorts query results; LIKE uses % as wildcard",
    ],
  },
  "cs-topics2-10": {
    defs: ["Boolean logic: operations on TRUE/FALSE values using gates"],
    facts: [
      "NOT: inverts; AND: both true → true; OR: either true → true",
      "NAND = NOT(AND); NOR = NOT(OR); XOR = one but not both",
      "Truth table: list all input combinations, show output",
    ],
    formulae: [
      "NAND(A,B) = NOT(A AND B)",
      "XOR(A,B) = (A OR B) AND NOT(A AND B)",
    ],
  },
  "bus-topics-1": {
    defs: [
      "Business: organisation that produces goods/services to satisfy needs/wants",
      "Entrepreneur: person who takes risk to start a business seeking profit",
    ],
    facts: [
      "Primary sector: extracting raw materials",
      "Secondary: manufacturing",
      "Tertiary: services",
      "Sole trader: unlimited liability; limited company: liability limited to investment",
      "Stakeholders: anyone with interest in the business (internal/external)",
    ],
  },
  "bus-topics-2": {
    defs: [
      "Motivation: the internal and external factors that drive a person to work and put in effort",
      "Organisational structure: the way a business arranges roles, responsibilities, and communication",
    ],
    facts: [
      "Taylor (Scientific Management): money is the main motivator — pay workers more for higher output",
      "Maslow's Hierarchy: Physiological → Safety → Social → Esteem → Self-actualisation needs",
      "Herzberg Two-Factor Theory: hygiene factors prevent dissatisfaction (pay, conditions); motivators create satisfaction (achievement, recognition)",
      "Delegation: passing authority to a subordinate to complete tasks and make decisions",
      "Span of control: number of staff directly managed by one manager",
      "Flat structure: few management layers — wide span of control, faster communication",
      "Tall structure: many layers — narrow span of control, slower communication up the hierarchy",
    ],
  },
  "bus-topics-3": {
    defs: [
      "Market: buyers and sellers of a product",
      "Market research: collecting data about customers and competitors",
    ],
    facts: [
      "4Ps: Product, Price, Place, Promotion",
      "Primary research: surveys/interviews (new data); secondary: existing data",
      "Price skimming: high initial price; penetration: low to gain share",
      "USP = Unique Selling Point",
    ],
  },
  "bus-topics-4": {
    defs: [
      "Production: process of making goods/services",
      "Productivity: output per worker per time period",
    ],
    facts: [
      "Job production: one-off items (high quality, expensive)",
      "Batch production: groups of identical items",
      "Flow production: continuous, automated (mass market)",
      "Quality control: checking finished products; quality assurance: building quality in",
    ],
  },
  "bus-topics-5": {
    defs: [
      "Revenue: income from sales = price × quantity",
      "Profit = Revenue − Total Costs",
      "Fixed costs: do not change with output (rent)",
      "Variable costs: change with output (raw materials)",
    ],
    formulae: [
      "Break-even output = Fixed Costs ÷ (Selling Price − Variable Cost per unit)",
      "Profit = Revenue − Total Costs",
      "Gross profit = Revenue − Cost of Sales",
    ],
  },
  "bus-topics-6": {
    defs: [
      "External influence: factor outside the business that affects its operations and decisions",
      "Globalisation: increasing economic, cultural, and political interconnection of the world",
    ],
    facts: [
      "Government policies: taxation affects profit; subsidies reduce costs; minimum wage affects labour costs",
      "Legislation: consumer protection, health & safety, and employment laws all affect business operations",
      "Inflation: rising price levels reduce consumer purchasing power and can increase business costs",
      "Exchange rates: strong local currency makes exports more expensive but imports cheaper",
      "Sustainability: businesses face pressure to reduce waste, use renewable energy, and cut carbon emissions",
      "Multinational corporations: bring investment and jobs to developing nations but may exploit low wages and avoid local tax",
    ],
  },
  "sci-bio-topics-1": {
    defs: ["Cell: basic structural and functional unit of life"],
    facts: [
      "Animal cell: cell membrane, cytoplasm, nucleus, mitochondria, ribosomes",
      "Plant cell adds: cell wall (cellulose), vacuole, chloroplasts",
      "Diffusion: net movement from high → low concentration (no energy needed)",
      "Osmosis: diffusion of water across partially permeable membrane",
    ],
    formulae: ["Magnification = image size ÷ actual size"],
  },
  "sci-bio-topics-2": {
    defs: [
      "Cell membrane: selectively permeable barrier that controls what enters and leaves the cell",
      "Nucleus: control centre of the cell; contains DNA in chromosomes",
    ],
    facts: [
      "Mitochondria: site of aerobic respiration — produces ATP energy for the cell",
      "Ribosomes: site of protein synthesis; found in cytoplasm or on rough endoplasmic reticulum",
      "Chloroplasts: found in plant cells; contain chlorophyll for photosynthesis",
      "Cell wall: made of cellulose in plants; provides structural support and is fully permeable",
      "Large central vacuole in plant cells is filled with cell sap; maintains turgor pressure",
      "Prokaryotic cells (bacteria): no nucleus, no membrane-bound organelles, smaller than eukaryotic cells",
    ],
  },
  "sci-bio-topics-3": {
    defs: [
      "Photosynthesis: process where plants make glucose using light energy",
    ],
    formulae: [
      "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in light, with chlorophyll)",
      "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy",
      "Anaerobic (animals): glucose → lactic acid + energy",
      "Anaerobic (yeast): glucose → ethanol + CO₂ + energy",
    ],
    facts: [
      "Limiting factors for photosynthesis: light intensity, CO₂ concentration, temperature",
    ],
  },
  "sci-bio-topics-4": {
    defs: [
      "Carbohydrate: organic molecule made of C, H, O used mainly for energy; monomers are monosaccharides",
      "Protein: polymer of amino acids; functions include enzymes, antibodies, structural materials, and hormones",
    ],
    facts: [
      "Test for glucose: Benedict's reagent — blue → brick-red precipitate if sugar present",
      "Test for starch: iodine solution — brown → blue-black if starch present",
      "Test for protein: Biuret reagent — blue → purple if protein present",
      "Test for fat: ethanol emulsion test — milky-white layer forms if fat present",
      "Lipids (fats and oils): made of glycerol and fatty acids; used for long-term energy storage, insulation, and cell membranes",
      "Water: essential for transport, chemical reactions, and temperature regulation (high specific heat capacity)",
    ],
  },
  "sci-bio-topics-5": {
    defs: [
      "Enzyme: biological catalyst that speeds up metabolic reactions without being consumed",
      "Active site: specific region of an enzyme molecule where a complementary substrate binds",
    ],
    facts: [
      "Lock-and-key model: enzyme active site fits exactly with one specific substrate shape",
      "Optimum temperature/pH: reaction rate is highest; deviation from optimum reduces activity",
      "Denaturation: irreversible change to enzyme shape at high temperature or extreme pH — active site altered",
      "Amylase: digests starch → maltose; produced in salivary glands and pancreas",
      "Protease: digests proteins → amino acids; produced in stomach (pepsin) and pancreas",
      "Lipase: digests lipids → glycerol + fatty acids; produced in pancreas",
      "Enzymes lower activation energy, increasing reaction rate without changing the overall energy change",
    ],
  },
  "sci-bio-topics-6": {
    defs: [
      "Chlorophyll: green pigment in chloroplasts that absorbs light energy to drive photosynthesis",
    ],
    facts: [
      "Photosynthesis occurs in chloroplasts, mainly in palisade mesophyll cells of leaves",
      "Leaf adaptations: large surface area, thin, transparent cuticle, stomata for gas exchange, veins for transport",
      "Limiting factors for photosynthesis: light intensity, CO₂ concentration, and temperature",
      "If one factor is limiting, increasing others has no effect on the rate",
      "Nitrate ions: needed to make amino acids and proteins; deficiency causes stunted growth",
      "Magnesium ions: needed to make chlorophyll; deficiency causes yellow leaves (chlorosis)",
    ],
    formulae: ["6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂"],
  },
  "sci-bio-topics-7": {
    defs: [
      "Digestion: breaking down large insoluble food molecules into small soluble ones that can be absorbed",
      "Peristalsis: wave-like muscular contractions that push food along the digestive tract",
    ],
    facts: [
      "Mouth: teeth mechanically break food; salivary amylase begins starch digestion",
      "Stomach: hydrochloric acid (pH 2) kills bacteria and activates pepsin which digests protein",
      "Small intestine (ileum): enzymes from pancreas complete digestion; villi absorb nutrients into blood",
      "Villi adaptations for absorption: large surface area, thin walls, good blood supply, microvilli",
      "Large intestine (colon): absorbs water; remaining material forms faeces",
      "Bile: made in liver, stored in gall bladder; emulsifies fats to increase surface area for lipase",
    ],
  },
  "sci-bio-topics-8": {
    defs: [
      "Transpiration: loss of water vapour from leaves through stomata by evaporation",
      "Xylem: vascular tissue transporting water and dissolved minerals from roots upward; dead lignified cells",
    ],
    facts: [
      "Phloem: living tissue transporting dissolved sugars (sucrose) from leaves to the rest of the plant",
      "Root hair cells: increase surface area for absorption of water by osmosis and mineral ions by active transport",
      "Transpiration rate increases with: higher temperature, lower humidity, higher wind speed, higher light intensity",
      "Guard cells control stomatal opening — become turgid in light → stomata open; flaccid → stomata close",
      "Water moves up xylem by transpiration pull (cohesion-tension theory)",
      "Translocation: movement of sucrose in phloem from source (leaves) to sink (roots, fruits, growing tips)",
    ],
  },
  "sci-bio-topics-9": {
    defs: [
      "Plasma: liquid part of blood (~55%) transporting dissolved substances throughout the body",
      "Haemoglobin: iron-containing protein in red blood cells that binds and carries oxygen",
    ],
    facts: [
      "Red blood cells: biconcave disc shape, no nucleus, packed with haemoglobin, transport O₂",
      "White blood cells: phagocytes engulf pathogens by phagocytosis; lymphocytes produce antibodies",
      "Platelets: cell fragments that release clotting factors to seal wounds",
      "Arteries: thick muscular walls, carry blood away from heart at high pressure",
      "Veins: thinner walls, carry blood toward heart, contain valves to prevent backflow",
      "Capillaries: one cell thick; site of exchange of gases, nutrients, and waste with body tissues",
      "Double circulatory system: pulmonary (heart → lungs → heart) and systemic (heart → body → heart)",
    ],
    formulae: ["Cardiac output = heart rate × stroke volume"],
  },
  "sci-bio-topics-10": {
    defs: [
      "Pathogen: microorganism that causes disease (bacteria, virus, fungus, or protozoan)",
      "Antibody: protein produced by B-lymphocytes that binds specifically to a matching antigen",
    ],
    facts: [
      "Bacteria cause disease by producing toxins; viruses reproduce inside host cells and destroy them",
      "Antigen: specific protein on the surface of a pathogen that triggers an immune response",
      "Active immunity: body produces its own antibodies after infection or vaccination — long-lasting",
      "Passive immunity: antibodies received from another source (mother's milk, injection) — temporary",
      "Vaccination: introduces weakened/dead pathogens or antigens → immune system makes antibodies + memory cells",
      "Antibiotics kill bacteria but are ineffective against viruses; overuse leads to antibiotic resistance",
      "MRSA: antibiotic-resistant bacterium — example of natural selection producing a resistant strain",
    ],
  },
  "sci-bio-topics-11": {
    defs: [
      "Alveolus (pl. alveoli): tiny air sac in the lungs where gas exchange between air and blood occurs",
      "Tidal volume: volume of air inhaled or exhaled with each normal resting breath",
    ],
    facts: [
      "Alveoli adaptations: very large total surface area, thin walls (one cell thick), moist surface, rich capillary blood supply",
      "Breathing in: intercostal muscles and diaphragm contract → thorax volume increases → air rushes in",
      "Breathing out: intercostal muscles and diaphragm relax → thorax volume decreases → air pushed out",
      "Gas exchange: O₂ diffuses from alveoli into blood; CO₂ diffuses from blood into alveoli",
      "Vital capacity: maximum volume of air that can be exhaled after a maximum inhalation",
      "Smoking: damages cilia, produces excess mucus, destroys alveolar walls (emphysema), causes lung cancer",
    ],
  },
  "sci-bio-topics-12": {
    defs: [
      "Aerobic respiration: release of energy from glucose using oxygen — efficient, produces CO₂ and water",
      "ATP: adenosine triphosphate — the immediate energy currency used by cells for all life processes",
    ],
    facts: [
      "Aerobic respiration occurs in the mitochondria",
      "Anaerobic respiration releases energy from glucose without oxygen — less efficient",
      "In muscles during intense exercise: anaerobic respiration produces lactic acid → cramp and fatigue",
      "Oxygen debt: extra oxygen required after anaerobic exercise to oxidise lactic acid",
      "Yeast anaerobic respiration: glucose → ethanol + CO₂ (fermentation, used in baking and brewing)",
      "Energy from respiration is used for: muscle contraction, active transport, cell division, maintaining body temperature",
    ],
    formulae: [
      "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP energy",
      "Anaerobic (muscle): glucose → lactic acid + ATP",
      "Anaerobic (yeast): glucose → ethanol + CO₂ + ATP",
    ],
  },
  "sci-bio-topics-13": {
    defs: [
      "Neuron: nerve cell specialised to conduct electrical impulses rapidly over long distances",
      "Hormone: chemical messenger secreted by an endocrine gland, transported in blood to a target organ",
    ],
    facts: [
      "Nervous system: electrical signals along neurons — fast, short-lived, localised response",
      "Endocrine system: chemical hormones via blood — slower, longer-lasting, widespread effect",
      "Reflex arc: receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector",
      "Synapse: junction between neurons; neurotransmitter chemicals diffuse across the synaptic gap",
      "Insulin (from pancreas β cells): lowers blood glucose by stimulating uptake by liver and muscle cells",
      "Glucagon (from pancreas α cells): raises blood glucose by stimulating glycogen breakdown in liver",
      "ADH (from pituitary): regulates water reabsorption in kidney tubules to control blood water potential",
    ],
  },
  "sci-bio-topics-14": {
    defs: [
      "Drug: chemical substance that alters the way the body or mind functions",
      "Antibiotic: drug that kills or inhibits the growth of bacteria (not effective against viruses)",
    ],
    facts: [
      "Depressants slow the nervous system — examples: alcohol, sedatives, heroin",
      "Stimulants speed up the nervous system — examples: caffeine, nicotine, cocaine",
      "Hallucinogens alter sensory perception — examples: LSD, cannabis",
      "Nicotine: highly addictive; causes increased heart rate and blood pressure; found in tobacco",
      "Long-term alcohol use causes liver cirrhosis, damages brain cells, and impairs coordination",
      "Antibiotic resistance arises through natural selection: bacteria that survive treatment reproduce and spread the resistance gene",
      "Patients must complete the full course of antibiotics to prevent resistant strains from surviving",
    ],
  },
  "sci-bio-topics-15": {
    defs: [
      "Fertilisation: fusion of a male gamete with a female gamete to form a diploid zygote",
      "Gamete: a sex cell (sperm or egg) containing the haploid number of chromosomes (23 in humans)",
    ],
    facts: [
      "Human sperm: haploid, motile, small; egg (ovum): haploid, large, non-motile",
      "Menstrual cycle (~28 days): FSH stimulates egg maturation; LH surge triggers ovulation (day 14)",
      "Oestrogen: thickens uterine lining; inhibits FSH; used in the combined contraceptive pill",
      "In plants: pollination = transfer of pollen; fertilisation occurs in ovule → seed; ovary becomes fruit",
      "Asexual reproduction: produces genetically identical clones (e.g. binary fission in bacteria, runners in plants)",
      "Sexual reproduction: produces genetic variation in offspring — advantageous for adapting to environmental changes",
    ],
  },
  "sci-bio-topics-16": {
    defs: [
      "Gene: a section of DNA that codes for a specific polypeptide (and therefore protein)",
      "Allele: one of two or more alternative forms of a gene found at the same locus on homologous chromosomes",
    ],
    facts: [
      "Chromosomes: thread-like structures in the nucleus made of DNA and protein; humans have 46 (23 pairs)",
      "Dominant allele: expressed when one or two copies are present (capital letter, e.g. B)",
      "Recessive allele: only expressed when two copies are present (lowercase, e.g. b)",
      "Homozygous: two identical alleles (BB or bb); Heterozygous: two different alleles (Bb)",
      "Genotype: allele combination an organism carries; Phenotype: observable characteristic expressed",
      "Sex determination: XX = female; XY = male — sex chromosomes are the 23rd pair",
      "Punnett square: grid used to predict the genotype and phenotype ratios of offspring",
    ],
    formulae: ["Probability (%) = (number with trait ÷ total offspring) × 100"],
  },
  "sci-bio-topics-17": {
    defs: [
      "Variation: differences in characteristics between individuals of the same species",
      "Natural selection: differential survival and reproduction of individuals with favourable traits",
    ],
    facts: [
      "Continuous variation: gradual range of values (height, mass) — influenced by many genes and environment",
      "Discontinuous variation: distinct categories with no intermediate forms (blood group, tongue-rolling)",
      "Mutation: random change in DNA base sequence; can be spontaneous or caused by radiation/chemicals",
      "Natural selection steps: variation exists → some variants better suited → these survive and reproduce more → traits passed on",
      "Selective breeding (artificial selection): humans choose organisms with desired traits to breed — reduces genetic diversity",
      "Genetic engineering: inserting a specific gene from one organism into another (e.g. human insulin gene into bacteria)",
    ],
  },
  "sci-bio-topics-18": {
    defs: [
      "Ecosystem: the community of living organisms plus the non-living environment they interact with",
      "Food chain: a sequence showing how energy and matter are transferred through feeding relationships",
    ],
    facts: [
      "Producer: autotroph that makes its own food via photosynthesis; always at the start of a food chain",
      "Consumer: heterotroph that eats other organisms; primary (eats plants), secondary (eats primary consumers)",
      "Decomposer: bacteria and fungi that break down dead organisms, returning nutrients to the soil",
      "Only ~10% of energy is transferred to the next trophic level; rest is lost as heat, movement, waste",
      "Pyramid of numbers: shows number of organisms at each level; can be inverted (e.g. one tree supporting many insects)",
      "Carbon cycle: photosynthesis removes CO₂ from air; respiration, combustion, and decomposition return it",
    ],
    formulae: [
      "Energy efficiency (%) = (energy in next level ÷ energy in current level) × 100",
    ],
  },
  "sci-bio-topics-19": {
    defs: [
      "Biodiversity: the variety of different species and genetic variation within an ecosystem",
      "Eutrophication: excess nutrients (from fertiliser runoff) in water → algal bloom → reduced oxygen → aquatic organisms die",
    ],
    facts: [
      "Deforestation: destroys habitats, reduces biodiversity, releases stored carbon dioxide, increases soil erosion",
      "Greenhouse gases (CO₂, CH₄, water vapour) trap infrared radiation → global warming",
      "Global warming causes: rising sea levels, more extreme weather, shifts in species distributions",
      "Air pollution: combustion releases CO₂ (warming), SO₂ (acid rain), CO (toxic), particulates (health)",
      "Conservation methods: national parks, captive breeding programmes, seed banks, habitat corridors, international treaties",
      "Sustainable agriculture: maintaining soil fertility, reducing pesticide use, protecting native species",
    ],
  },
  "sci-chem-topics-1": {
    defs: [
      "Element: pure substance of one type of atom",
      "Compound: two or more elements chemically combined",
      "Mixture: substances mixed but not chemically combined — can be separated physically",
    ],
    facts: [
      "Proton: +1 charge, in nucleus",
      "Neutron: no charge, in nucleus",
      "Electron: −1 charge, shells",
      "Atomic number = protons; mass number = protons + neutrons",
      "Isotopes: same element, different neutron count (same protons)",
    ],
  },
  "sci-chem-topics-2": {
    defs: [
      "Ion: atom or group of atoms that has gained or lost electrons, giving it an overall electric charge",
      "Ionic bond: electrostatic attraction between oppositely charged ions in a giant lattice structure",
    ],
    facts: [
      "Metals lose electrons → positive ions (cations); non-metals gain electrons → negative ions (anions)",
      "Ionic compounds: high melting/boiling points; conduct electricity when molten or dissolved (ions free to move)",
      "Covalent bond: shared pair of electrons between two non-metal atoms",
      "Simple covalent molecules: low melting points due to weak intermolecular forces between molecules",
      "Giant covalent structures (diamond, graphite, SiO₂): very high melting points, strong bonds throughout",
      "Metallic bonding: sea of delocalised electrons around positive metal ions — conducts electricity and heat well",
    ],
  },
  "sci-chem-topics-3": {
    defs: [
      "Mole: amount of substance containing Avogadro's number of particles (6.02 × 10²³)",
      "Molar mass: mass of one mole of a substance in g/mol; numerically equal to relative formula mass (Mr)",
    ],
    facts: [
      "Relative atomic mass (Ar): average mass of atoms of an element relative to 1/12 the mass of ¹²C",
      "Relative formula mass (Mr): sum of Ar values of all atoms in the chemical formula",
      "Empirical formula: simplest whole number ratio of atoms (e.g. CH₂O for glucose)",
      "Molecular formula: actual number of atoms per molecule (e.g. C₆H₁₂O₆ for glucose)",
      "Percentage yield = (actual yield ÷ theoretical yield) × 100",
    ],
    formulae: [
      "n = m/M  (moles = mass ÷ molar mass)",
      "c = n/V  (concentration = moles ÷ volume in dm³)",
      "Avogadro constant: Nₐ = 6.02 × 10²³ mol⁻¹",
    ],
  },
  "sci-chem-topics-4": {
    defs: [
      "Electrolysis: the breakdown of an ionic compound (electrolyte) using an electric current",
      "Electrolyte: ionic substance in solution or molten state that conducts electricity by ion movement",
    ],
    facts: [
      "Cathode: negative electrode — positive ions (cations) gain electrons here (reduction occurs)",
      "Anode: positive electrode — negative ions (anions) lose electrons here (oxidation occurs)",
      "Electroplating: depositing a thin metal layer on an object using electrolysis to improve appearance or protection",
      "Electrolysis of water: H₂ gas produced at cathode, O₂ gas produced at anode (2:1 volume ratio)",
      "Electrolysis of brine (NaCl solution): Cl₂ at anode, H₂ at cathode, NaOH solution remains",
      "Active electrode dissolves if made from the same metal being deposited (used in copper refining)",
    ],
  },
  "sci-chem-topics-5": {
    defs: [
      "Exothermic reaction: releases energy to surroundings — temperature of surroundings increases",
      "Endothermic reaction: absorbs energy from surroundings — temperature of surroundings decreases",
    ],
    facts: [
      "Bond breaking is endothermic (requires energy); bond forming is exothermic (releases energy)",
      "Overall exothermic if energy released (bond forming) > energy absorbed (bond breaking)",
      "Examples of exothermic: combustion, neutralisation, respiration, oxidation reactions",
      "Examples of endothermic: thermal decomposition, photosynthesis, dissolving ammonium nitrate",
      "Activation energy: minimum energy particles must have to react; catalysts provide a lower energy pathway",
    ],
    formulae: [
      "Q = mcΔT  (heat energy = mass × specific heat capacity × temperature change)",
    ],
  },
  "sci-chem-topics-6": {
    defs: [
      "Rate of reaction: change in amount of reactant consumed (or product formed) per unit time",
      "Catalyst: substance that increases the rate of a reaction without being used up — lowers activation energy",
    ],
    facts: [
      "Higher concentration → more particles per unit volume → more frequent collisions → faster rate",
      "Higher temperature → particles have more kinetic energy → more energetic and more frequent collisions",
      "Smaller particle size (larger surface area) → more particles exposed at surface → more collisions",
      "Catalysts provide an alternative reaction pathway with a lower activation energy",
      "Reversible reaction: can proceed in both forward and reverse directions (shown with ⇌)",
      "Le Chatelier's Principle: a system at equilibrium responds to a change by shifting to oppose that change",
    ],
    formulae: ["Rate = amount of reactant used (or product formed) ÷ time"],
  },
  "sci-chem-topics-7": {
    defs: [
      "Acid: produces H⁺ ions in water; pH < 7",
      "Alkali: produces OH⁻ ions in water; pH > 7",
      "Salt: formed when acid reacts with base/metal/carbonate",
    ],
    facts: [
      "Neutralisation: acid + alkali → salt + water",
      "acid + metal → salt + hydrogen",
      "acid + carbonate → salt + water + CO₂",
      "Universal indicator shows pH; litmus only acid/alkali",
      "Strong acid fully ionises (HCl, H₂SO₄, HNO₃)",
    ],
  },
  "sci-chem-topics-8": {
    defs: [
      "Period: a horizontal row in the periodic table — elements have the same number of electron shells",
      "Group: a vertical column — elements have the same number of outer shell electrons → similar chemical properties",
    ],
    facts: [
      "Group 1 (alkali metals): soft, react with water → metal hydroxide + H₂; reactivity increases down group as outer electron is further from nucleus",
      "Group 7 (halogens): diatomic molecules; more reactive halogens displace less reactive ones from their salts",
      "Group 0 (noble gases): full outer electron shell → unreactive; used in balloons (He) and lighting (Ar)",
      "Transition metals: high density, high melting points, good conductors, form coloured compounds, act as catalysts",
      "Across a period (left to right): atomic radius decreases, metal to non-metal character changes",
    ],
  },
  "sci-chem-topics-9": {
    defs: [
      "Reactivity series: ranking of metals from most to least reactive (K > Na > Ca > Mg > Al > Zn > Fe > Cu)",
      "Ore: rock containing a metal compound in sufficient concentration for economic extraction",
    ],
    facts: [
      "More reactive metals displace less reactive metals from solutions (displacement reaction)",
      "Very reactive metals (Na, K, Ca, Mg, Al): extracted by electrolysis of molten compounds",
      "Less reactive metals (Zn, Fe, Cu): extracted by reduction with carbon or carbon monoxide",
      "Blast furnace: iron ore + coke + limestone → iron + CO₂; CO reduces Fe₂O₃",
      "Rusting: iron reacts with O₂ and water → iron(III) oxide (Fe₂O₃·H₂O); only iron and steel rust",
      "Rust prevention: painting, galvanising (zinc coating), using stainless steel (alloy), sacrificial protection (zinc block)",
    ],
  },
  "sci-chem-topics-10": {
    defs: [
      "Greenhouse gas: gas that absorbs and re-emits infrared radiation, trapping heat in the atmosphere",
    ],
    facts: [
      "Main greenhouse gases: CO₂ (from combustion), methane (from farming/landfill), water vapour",
      "Global warming effects: rising sea levels, more extreme weather, melting ice caps, habitat loss",
      "Acid rain: SO₂ and NO₂ from burning fossil fuels dissolve in rain → pH < 5.6 → damages ecosystems",
      "Water treatment steps: screening → sedimentation → filtration → chlorination",
      "Hard water: contains dissolved Ca²⁺ and Mg²⁺ ions → prevents soap lathering, forms limescale in pipes",
      "Carbon monoxide (CO) from incomplete combustion: colourless, odourless, toxic — binds to haemoglobin",
    ],
  },
  "sci-chem-topics-11": {
    defs: [
      "Hydrocarbon: organic compound containing only carbon and hydrogen atoms",
      "Alkane: saturated hydrocarbon with only single C–C bonds; general formula CₙH₂ₙ₊₂",
    ],
    facts: [
      "Alkenes: unsaturated hydrocarbons with one C=C double bond; general formula CₙH₂ₙ; decolourise bromine water",
      "Fractional distillation separates crude oil by boiling point; shorter carbon chains = lower boiling point",
      "Cracking: breaks large alkane molecules into smaller, more useful alkanes and alkenes (thermal or catalytic)",
      "Addition polymerisation: many alkene monomers (e.g. ethene) join to form a long chain polymer (poly(ethene))",
      "Ethanol production: fermentation of sugars using yeast (anaerobic); or addition of steam to ethene (industrial)",
      "Carboxylic acids (−COOH group): weak acids; ethanoic acid is in vinegar; react with alcohols to form esters",
    ],
  },
  "sci-chem-topics-12": {
    defs: [
      "Chromatography: technique for separating components of a mixture based on how they travel through a medium",
    ],
    facts: [
      "Paper/TLC chromatography: Rf value identifies a substance; pure substance gives one spot at constant Rf",
      "Distillation: separates liquids by boiling point; simple for large differences, fractional for close boiling points",
      "Filtration: separates an insoluble solid from a liquid mixture",
      "Crystallisation: obtains a pure solid from solution by carefully evaporating the solvent",
      'Tests: H₂ — "pop" with lit splint; O₂ — relights glowing splint; CO₂ — turns limewater milky; Cl₂ — bleaches damp litmus',
      "Flame tests: Li = red, Na = yellow, K = lilac, Ca = orange-red, Cu = green",
    ],
    formulae: [
      "Rf = distance moved by substance ÷ distance moved by solvent front",
    ],
  },
  "sci-phys-topics-1": {
    defs: [
      "Speed: distance per unit time",
      "Velocity: speed in a given direction (vector)",
      "Acceleration: rate of change of velocity",
    ],
    formulae: [
      "s = d/t  (speed = distance ÷ time)",
      "a = (v−u)/t  (acceleration)",
      "F = ma  (Newton's 2nd Law)",
      "W = mg  (weight = mass × g, where g = 10 N/kg)",
      "KE = ½mv²",
      "GPE = mgh",
      "Momentum = mv",
      "p = F/A  (pressure = force ÷ area)",
    ],
  },
  "sci-phys-topics-2": {
    defs: [
      "Specific heat capacity: energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K)",
      "Latent heat: energy absorbed or released during a change of state with no temperature change",
    ],
    facts: [
      "Conduction: heat transfer through vibrating particles passing energy along; best in metals",
      "Convection: heat transfer in fluids — warm fluid less dense, rises; cool fluid sinks, creating convection current",
      "Radiation (infrared): electromagnetic wave transfer; travels through vacuum; dark matt surfaces best absorbers/emitters",
      "White/shiny surfaces are poor absorbers and poor emitters of infrared radiation",
      "Changes of state: melting (solid→liquid), boiling (liquid→gas) absorb energy; freezing, condensing release energy",
    ],
    formulae: [
      "Q = mcΔT  (thermal energy = mass × specific heat capacity × temperature change)",
      "Q = mL  (energy during change of state = mass × specific latent heat)",
    ],
  },
  "sci-phys-topics-3": {
    defs: [
      "Transverse wave: oscillation is perpendicular to the direction of energy transfer (e.g. light, water waves)",
      "Longitudinal wave: oscillation is parallel to the direction of energy transfer (e.g. sound waves)",
    ],
    facts: [
      "Wave properties: amplitude (max displacement), wavelength (λ, distance per cycle), frequency (f, cycles per second), speed (v)",
      "Reflection: angle of incidence = angle of reflection (both measured from the normal to the surface)",
      "Refraction: waves change direction when their speed changes at a boundary (e.g. light into glass)",
      "Total internal reflection: occurs when angle of incidence exceeds the critical angle; used in optical fibres",
      "EM spectrum (lowest to highest frequency): radio → microwave → infrared → visible → UV → X-ray → gamma ray",
      "Sound is a longitudinal wave; travels fastest in solids, then liquids, then gases; cannot travel through a vacuum",
    ],
    formulae: ["v = fλ  (wave speed = frequency × wavelength)"],
  },
  "sci-phys-topics-4": {
    defs: [
      "Electrical current: rate of flow of charge",
      "Voltage (p.d.): energy transferred per unit charge",
      "Resistance: opposition to current flow",
    ],
    formulae: [
      "V = IR  (Ohm's Law)",
      "P = IV = I²R = V²/R",
      "E = Pt  (energy = power × time)",
      "Q = It  (charge = current × time)",
      "Series: R_total = R₁+R₂; V shared; I same",
      "1/R_total = 1/R₁+1/R₂ (parallel); I shared; V same",
    ],
  },
  "sci-phys-topics-5": {
    defs: [
      "Radioactive decay: spontaneous emission of radiation from an unstable nucleus, changing it to a more stable form",
      "Half-life: time for the activity (or number of undecayed nuclei) of a radioactive sample to halve",
    ],
    facts: [
      "Alpha (α): helium nucleus (2p, 2n); stopped by paper/skin; high ionising power; dangerous if swallowed",
      "Beta (β): fast-moving electron from nucleus; stopped by a few mm aluminium; moderate ionising power",
      "Gamma (γ): high-frequency electromagnetic radiation; needs thick lead/concrete to stop; least ionising, most penetrating",
      "Nuclear fission: heavy nucleus (e.g. ²³⁵U) splits into two smaller nuclei + neutrons + energy (chain reaction in reactors)",
      "Nuclear fusion: two light nuclei merge (e.g. hydrogen isotopes → helium); powers the Sun; requires extreme temperature/pressure",
      "Uses: gamma used in cancer radiotherapy and sterilising equipment; alpha used in smoke detectors; beta used in medical tracers",
    ],
    formulae: ["Remaining nuclei after n half-lives: N = N₀ × (½)ⁿ"],
  },
  "sci-phys-topics-6": {
    defs: [
      "Light-year: distance light travels in one year (~9.46 × 10¹⁵ m); used to measure interstellar distances",
      "Main sequence star: stable star fusing hydrogen into helium in its core, balanced by gravity and radiation pressure",
    ],
    facts: [
      "Solar system: the Sun plus 8 planets, moons, dwarf planets, asteroids, and comets",
      "Galaxy: billions of stars held together by gravity; our galaxy is the Milky Way",
      "Universe: contains billions of galaxies; estimated age ≈ 13.8 billion years",
      "Red-shift: light from distant galaxies is stretched to longer (redder) wavelengths — evidence they are moving away",
      "Big Bang theory: the universe began from an extremely hot, dense point ~13.8 billion years ago and has been expanding since",
      "Star life cycle (small): nebula → protostar → main sequence → red giant → white dwarf; large stars end as supernovae → neutron star or black hole",
    ],
  },
  "am-topics-1": {
    defs: [
      "Function: each input maps to exactly one output",
      "f⁻¹(x): inverse function — swaps x and y, then rearrange",
    ],
    facts: [
      "Domain: set of input values; Range: set of output values",
      "Composite fg(x) means f(g(x)) — apply g first",
      "For f⁻¹ to exist as a function, f must be one-to-one",
    ],
    formulae: ["To find inverse: let y=f(x), swap x↔y, rearrange for y"],
  },
  "am-topics-2": {
    defs: [
      "Quadratic: ax² + bx + c = 0",
      "Discriminant (Δ): determines nature of roots",
    ],
    formulae: [
      "x = (−b ± √(b²−4ac)) / 2a",
      "Discriminant: Δ = b²−4ac",
      "Δ > 0: two real distinct roots",
      "Δ = 0: one repeated root",
      "Δ < 0: no real roots",
      "Completing square: a(x+p)²+q where p=b/2a",
    ],
    facts: ["Vertex at x = −b/2a", "a>0: U-shape (min); a<0: ∩-shape (max)"],
  },
  "am-topics-3": {
    defs: [
      "Linear inequality: a statement that one linear expression is greater or less than another",
      "Modulus function |x|: the absolute value (magnitude) of x — always non-negative",
    ],
    facts: [
      "Solve linear inequality like an equation BUT reverse the inequality sign when multiplying or dividing by a negative number",
      "Quadratic inequality: find the roots of the equation first, then use the graph shape to determine the solution set",
      "|x| < a ⟺ −a < x < a; |x| > a ⟺ x < −a or x > a",
      "Set notation for solutions: {x : x > 3}, or interval notation: (3, ∞)",
      "Sketch a graph to identify regions where the inequality is satisfied",
    ],
    formulae: ["|x − a| < b ⟺ a − b < x < a + b"],
  },
  "am-topics-4": {
    defs: [
      "Surd: an irrational root that cannot be simplified to a rational number (e.g. √5, ∛7)",
      "Rationalise: rewrite a fraction to remove surds from the denominator",
    ],
    facts: [
      "Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ",
      "Fractional index: a^(m/n) = ⁿ√(aᵐ); e.g. 8^(2/3) = (∛8)² = 4",
      "Simplify surds: √(ab) = √a × √b",
      "Rationalise 1/√a by multiplying by √a/√a",
      "Rationalise 1/(a + √b) by multiplying numerator and denominator by the conjugate (a − √b)",
    ],
    formulae: ["aᵐ × aⁿ = aᵐ⁺ⁿ", "(aᵐ)ⁿ = aᵐⁿ", "a^(p/q) = ᵍ√(aᵖ)"],
  },
  "am-topics-5": {
    defs: [
      "Remainder Theorem: when polynomial f(x) is divided by (x − a), the remainder equals f(a)",
      "Factor Theorem: (x − a) is a factor of f(x) if and only if f(a) = 0",
    ],
    facts: [
      "To factorise a cubic: use factor theorem to find one root, divide out the factor, then factorise the remaining quadratic",
      "Try factors of the constant term as candidate roots when applying factor theorem",
      "Polynomial long division: similar to numerical long division; find how many times leading term divides",
      "If f(a) = 0 then (x − a) is a factor and a is a root (x-intercept) of the curve y = f(x)",
    ],
    formulae: [
      "f(x) = (x − a) × Q(x) + R  where R = f(a)  (quotient Q(x) plus remainder R)",
    ],
  },
  "am-topics-6": {
    defs: [
      "Simultaneous equations: two or more equations that are all satisfied by the same set of values",
    ],
    facts: [
      "Linear + linear: solve by elimination (add/subtract equations) or substitution",
      "Linear + quadratic: substitute the linear equation into the quadratic to form a single quadratic",
      "Number of solutions depends on discriminant: Δ > 0 → two solutions; Δ = 0 → one solution (line tangent to curve); Δ < 0 → no real solutions",
      "Graphically: solutions are the coordinates of intersection points of the two graphs",
      "Always verify solutions satisfy BOTH original equations",
    ],
    formulae: [
      "Discriminant Δ = b² − 4ac determines the number of real intersection points",
    ],
  },
  "am-topics-7": {
    formulae: [
      "aˣ = e^(x ln a)",
      "log_a(x) = ln(x)/ln(a)",
      "log(AB) = log A + log B",
      "log(A/B) = log A − log B",
      "log(Aⁿ) = n log A",
      "ln(eˣ) = x; e^(ln x) = x",
    ],
    facts: [
      "ln = natural log (base e)",
      "log without base = log₁₀",
      "Exponential growth: y = Ae^(kt); decay: k < 0",
    ],
  },
  "am-topics-8": {
    defs: [
      "Gradient of a straight line: rate of change of y with respect to x; a measure of the line's steepness",
    ],
    facts: [
      "Equation of a line: y = mx + c where m = gradient and c = y-intercept",
      "Gradient between two points: m = (y₂ − y₁) ÷ (x₂ − x₁)",
      "Parallel lines have equal gradients",
      "Perpendicular lines: product of their gradients equals −1 (m₁ × m₂ = −1)",
      "Collinear points lie on the same straight line — check by computing gradient between consecutive pairs",
    ],
    formulae: [
      "m = (y₂ − y₁) / (x₂ − x₁)",
      "Distance = √[(x₂−x₁)² + (y₂−y₁)²]",
      "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)",
      "Perpendicular gradient: m₂ = −1/m₁",
    ],
  },
  "am-topics-9": {
    defs: [
      "Radian: the angle at the centre of a circle subtended by an arc equal in length to the radius",
    ],
    facts: [
      "π radians = 180°; to convert degrees → radians: multiply by π/180",
      "To convert radians → degrees: multiply by 180/π",
      "Arc length and sector area formulae require the angle to be in radians",
      "Area of a circular segment = sector area − triangle area",
    ],
    formulae: [
      "Arc length: s = rθ  (r = radius, θ in radians)",
      "Sector area: A = ½r²θ",
      "Area of triangle within sector: ½r² sin θ",
      "Segment area: ½r²(θ − sin θ)",
    ],
  },
  "am-topics-10": {
    formulae: [
      "sin²θ + cos²θ = 1",
      "1 + tan²θ = sec²θ",
      "1 + cot²θ = cosec²θ",
      "sin(A±B) = sinA cosB ± cosA sinB",
      "cos(A±B) = cosA cosB ∓ sinA sinB",
      "tan(A±B) = (tanA±tanB)/(1∓tanA tanB)",
      "sin2A = 2sinA cosA",
      "cos2A = cos²A − sin²A = 1−2sin²A = 2cos²A−1",
    ],
    facts: [
      "CAST diagram: All positive (1st), Sin (2nd), Tan (3rd), Cos (4th)",
      "Period of sinx/cosx = 360°; tanx = 180°",
      "Amplitude: coefficient of trig function",
    ],
  },
  "am-topics-11": {
    defs: [
      "Permutation: an ordered arrangement of objects from a set",
      "Combination: a selection of objects from a set where order does not matter",
    ],
    facts: [
      "n! (n factorial) = n × (n−1) × … × 2 × 1; by definition, 0! = 1",
      "Key distinction: permutations count order; combinations do not",
      "Arrangements with restrictions: fix the restricted items first, then count arrangements of the rest",
      "Arrangements in a circle: (n−1)! for n distinct objects (fix one position as reference)",
      "Identical items: divide total arrangements by the factorial of the count of identical items",
    ],
    formulae: [
      "nPr = n! / (n−r)!",
      "nCr = n! / (r!(n−r)!)",
      "nCr = nC(n−r)  (symmetry)",
    ],
  },
  "am-topics-12": {
    defs: [
      "Binomial theorem: a formula for expanding (a + b)ⁿ without repeated multiplication",
    ],
    facts: [
      "Pascal's Triangle: each entry is the sum of the two entries directly above; rows give binomial coefficients",
      "The general term of the expansion is Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ where r starts at 0",
      "To find a specific term: set the power of the required variable equal to r and solve",
      "Binomial approximation: (1 + x)ⁿ ≈ 1 + nx + n(n−1)/2! x² (valid for |x| < 1, used for small x)",
    ],
    formulae: [
      "(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ  for r = 0 to n",
      "General term: T_{r+1} = ⁿCᵣ aⁿ⁻ʳ bʳ",
    ],
  },
  "am-topics-13": {
    defs: [
      "Vector: a quantity that has both magnitude (size) and direction",
      "Unit vector: a vector with magnitude equal to exactly 1",
    ],
    facts: [
      "Vectors can be represented as column vectors (x, y) or in i-j notation (xi + yj)",
      "Vectors add head-to-tail (triangle law); parallelogram law gives the resultant",
      "Scalar multiplication changes the magnitude and can reverse direction",
      "Position vector of P: OP⃗ = vector from origin O to point P",
      "Collinear points: AP⃗ = k × AB⃗ for some scalar k, meaning vectors are parallel and share a point",
    ],
    formulae: [
      "|a| = √(x² + y²)  for a = (x, y)",
      "Unit vector: â = a / |a|",
      "AB⃗ = OB⃗ − OA⃗",
    ],
  },
  "am-topics-14": {
    formulae: [
      "Matrix addition: add corresponding elements",
      "Scalar multiply: multiply every element by k",
      "AB: row of A × column of B (only if cols of A = rows of B)",
      "det(A) = ad − bc  for 2×2",
      "A⁻¹ = (1/det) × [d −b; −c a]",
    ],
    facts: [
      "AA⁻¹ = I (identity matrix)",
      "det = 0: matrix is singular (no inverse)",
      "AX = B → X = A⁻¹B",
    ],
  },
  "am-topics-15": {
    formulae: [
      "d/dx(xⁿ) = nxⁿ⁻¹",
      "d/dx(eˣ) = eˣ",
      "d/dx(ln x) = 1/x",
      "d/dx(sin x) = cos x",
      "d/dx(cos x) = −sin x",
      "Chain rule: dy/dx = (dy/du)(du/dx)",
      "Product rule: d/dx(uv) = u(dv/dx) + v(du/dx)",
      "Quotient rule: d/dx(u/v) = (v(du/dx)−u(dv/dx))/v²",
    ],
    facts: [
      "Set dy/dx = 0 to find stationary points",
      "d²y/dx² > 0: minimum; < 0: maximum",
    ],
  },
  "am-topics-16": {
    formulae: [
      "∫xⁿ dx = xⁿ⁺¹/(n+1) + c  (n ≠ −1)",
      "∫eˣ dx = eˣ + c",
      "∫1/x dx = ln|x| + c",
      "∫sin x dx = −cos x + c",
      "∫cos x dx = sin x + c",
      "Area = ∫[a to b] y dx  (above x-axis)",
    ],
    facts: [
      "Definite integral: substitute limits b then a, subtract",
      "Area below x-axis comes out negative — take absolute value",
      "Always add +c for indefinite integrals",
    ],
  },
  "am-topics-17": {
    defs: [
      "Kinematics: the branch of mechanics studying motion without considering the forces causing it",
      "Displacement: the distance moved in a specified direction (a vector quantity)",
    ],
    facts: [
      "Displacement-time graph: gradient = velocity; straight line = constant velocity; curved = acceleration",
      "Velocity-time graph: gradient = acceleration; area under graph = displacement",
      "Equations of motion (suvat) are only valid when acceleration is constant",
      "For variable acceleration: v = ds/dt (differentiate s for v); a = dv/dt (differentiate v for a)",
      "Integrate v with respect to t to find s; integrate a with respect to t to find v (add constant of integration)",
    ],
    formulae: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "s = ½(u + v)t",
      "v = ∫a dt + c;  s = ∫v dt + c",
    ],
  },
  "gp-topics-1": {
    defs: [
      "Demographic change: shifts in a population's size, age structure, or geographic distribution over time",
    ],
    facts: [
      "Global population exceeded 8 billion in 2022; most growth is concentrated in developing nations",
      "Ageing population: more elderly people, fewer young workers → pressure on pensions, healthcare, and social services",
      "Youth bulge: large young population → potential economic growth OR pressure on jobs and education",
      "Total fertility rate (TFR): average children per woman; TFR below 2.1 means population will eventually decline",
      "Urbanisation: over 55% of world population now lives in cities; rapid urbanisation creates infrastructure pressures",
      "Migration can partially offset the effects of ageing or declining populations in high-income countries",
    ],
  },
  "gp-topics-2": {
    defs: [
      "Education for All (EFA): UNESCO global initiative to provide quality education to every person worldwide",
      "Literacy: the ability to read, write, and use numbers to a functional level in everyday life",
    ],
    facts: [
      "UN Sustainable Development Goal 4: ensure inclusive and equitable quality education for all by 2030",
      "Over 300 million children globally still lack access to adequate schooling",
      "Gender gap: girls are disproportionately excluded from education in sub-Saharan Africa and parts of South Asia",
      "Education increases earning potential, reduces poverty, improves health outcomes, and strengthens democracy",
      "Barriers to education: poverty, conflict, distance to schools, disability, gender norms, child labour",
      "Digital education can broaden access but risks widening the digital divide for communities without internet",
    ],
  },
  "gp-topics-3": {
    defs: [
      "Unemployment: the state of being able and willing to work but not having a paid job",
      "Gig economy: a labour market characterised by short-term freelance contracts rather than permanent employment",
    ],
    facts: [
      "Types of unemployment: cyclical (demand falls in recession), structural (skills mismatch), frictional (between jobs)",
      "Youth unemployment is particularly high in many countries, limiting economic participation and social inclusion",
      "Automation and AI are displacing routine manual and cognitive jobs, while creating demand for digital skills",
      "Trade unions protect workers through collective bargaining for fair pay and conditions",
      "Multinational corporations create jobs in developing nations but may exploit cheaper labour and fewer regulations",
      "Universal Basic Income (UBI): proposed policy to give all citizens a regular unconditional payment — debated globally",
    ],
  },
  "gp-topics-4": {
    defs: [
      "Non-renewable energy: finite sources that will be depleted (coal, oil, natural gas, uranium)",
      "Renewable energy: sources naturally replenished on a human timescale (solar, wind, hydro, geothermal, tidal)",
    ],
    facts: [
      "Fossil fuels currently supply ~80% of global energy; combustion releases CO₂, contributing to climate change",
      "Nuclear energy: low carbon but produces radioactive waste; risk of accidents (Chernobyl 1986, Fukushima 2011)",
      "Solar and wind power are growing rapidly but are intermittent — require energy storage or backup systems",
      "Energy security: ensuring reliable and affordable energy supplies; drives geopolitical tensions (e.g. oil dependency)",
      "Energy poverty: ~770 million people lack access to electricity, limiting education, health, and economic development",
      "Fracking: hydraulic fracturing to extract shale gas; controversial due to risks of water contamination and earthquakes",
    ],
  },
  "gp-topics-5": {
    defs: [
      "Globalisation: the increasing economic, political, social, and cultural interconnection of the world",
      "Free trade: the exchange of goods and services between countries without tariffs, quotas, or other trade barriers",
    ],
    facts: [
      "Multinational corporations (MNCs) operate across many countries; may transfer technology but can avoid local taxes",
      "Global supply chains: products are assembled from components made in many different countries",
      "Cultural globalisation: spread of ideas, music, food, and media globally; risks cultural homogenisation",
      "WTO (World Trade Organization): oversees international trade rules and resolves trade disputes",
      "Anti-globalisation arguments: increases inequality, exploits developing nations, damages local industries",
      "Benefits of globalisation: economic growth, technology transfer, cultural exchange, lower consumer prices",
    ],
  },
  "gp-topics-6": {
    defs: [
      "Rule of law: the principle that all people and institutions are subject to and accountable under the law",
      "Restorative justice: approach that focuses on rehabilitating offenders and repairing harm rather than just punishing",
    ],
    facts: [
      "Crime rates vary widely between countries due to inequality, poverty, policing levels, and cultural factors",
      "Organised transnational crime includes drug trafficking, human trafficking, and cybercrime",
      "Capital punishment is used in ~55 countries; debated on grounds of deterrence, human rights, and wrongful execution",
      "Cybercrime is the fastest-growing crime type globally, including fraud, hacking, and identity theft",
      "Drug policy debate: prohibition vs harm-reduction (e.g. Portugal's decriminalisation showed reduced drug harm)",
      "High recidivism rates in punitive prison systems suggest rehabilitation programmes are more effective long-term",
    ],
  },
  "gp-topics-7": {
    defs: [
      "Migration: the movement of people from one place to another with the intention of settling there temporarily or permanently",
      "Refugee: a person forced to flee their home country due to persecution, armed conflict, or natural disaster",
    ],
    facts: [
      "UNHCR (2022): over 100 million people are forcibly displaced — the highest number ever recorded",
      "Economic migrants move for better employment opportunities and living standards",
      "Brain drain: highly skilled workers leave developing countries, creating a talent shortage at home",
      "Remittances: money sent home by migrants; crucial for many developing economies (exceeds foreign aid globally)",
      "Climate migration: rising sea levels, droughts, and extreme weather are increasing displacement",
      "EU freedom of movement: allows citizens to live and work in any member state — a model of managed migration",
    ],
  },
  "gp-topics-8": {
    defs: [
      "Absolute poverty: lacking the basic necessities for survival — World Bank line: less than $2.15/day (2022)",
      "Relative poverty: having an income significantly below the average in one's own society, limiting full participation",
    ],
    facts: [
      "Gini coefficient measures income inequality: 0 = perfect equality; 1 = total inequality",
      "Extreme global poverty declined for decades but COVID-19 reversed progress in many regions",
      "Root causes of poverty: lack of education, poor governance, conflict, geographic isolation, and colonial history",
      "The richest 1% own more wealth than the bottom 50% of the global population combined (Oxfam, 2023)",
      "Microfinance: small loans to entrepreneurs in developing countries (e.g. Grameen Bank, Bangladesh)",
      '"Trade not aid" argument: sustainable development requires fair trade rules, not just charity',
    ],
  },
  "gp-topics-9": {
    defs: [
      "Commercialisation of sport: the transformation of sport into a profit-driven industry through sponsorship, broadcasting, and branding",
      "Doping: the use of prohibited substances or methods to enhance athletic performance",
    ],
    facts: [
      'Sport as "soft power": nations use sporting success to build international prestige and diplomacy',
      "Mega-events (Olympics, World Cup): boost tourism and national pride but can displace communities and drain public funds",
      "Physical activity has proven mental and physical health benefits; governments invest in sport for public health",
      "Gender inequality in sport persists: women receive less pay, media coverage, and investment than men",
      "E-sports (competitive gaming) are growing rapidly and challenging traditional definitions of sport",
      "WADA (World Anti-Doping Agency) enforces global anti-doping rules and coordinates testing across all sports",
    ],
  },
  "gp-topics-10": {
    defs: [
      "Sustainable development: development that meets the needs of the present without compromising future generations's ability to meet their needs",
      "Carbon footprint: total greenhouse gas emissions caused directly and indirectly by an individual, organisation, or product",
    ],
    facts: [
      "UN Sustainable Development Goals (SDGs): 17 goals adopted by all 193 UN member states in 2015; deadline 2030",
      "Paris Agreement (2015): nations committed to limiting global warming to 1.5–2°C above pre-industrial levels",
      "Circular economy: design products to be reused, repaired, and recycled rather than discarded as waste",
      "Tragedy of the commons: shared resources (fishing stocks, clean air) are overexploited without collective management rules",
      "Climate change effects: rising sea levels, more intense storms, droughts, biodiversity loss, food insecurity",
      "Individual vs systemic change: debate over whether personal lifestyle choices or government/corporate policy is the primary driver of sustainability",
    ],
  },
  "gp-topics-11": {
    defs: [
      "Digital divide: the gap between people who have access to modern information technology and those who do not",
      "Artificial intelligence: computer systems that perform tasks normally requiring human intelligence",
    ],
    facts: [
      "Over 5 billion internet users globally (2024) but ~2.7 billion remain offline, mostly in developing countries",
      "Social media connects people globally but amplifies misinformation and creates echo chambers",
      "Surveillance capitalism: business model of collecting user data to target advertising (e.g. Google, Meta)",
      "Automation threatens routine jobs while creating new demand for digital, creative, and social skills",
      "AI ethics concerns: algorithmic bias, privacy violations, lack of accountability, autonomous weapons",
      "Cybersecurity is an increasing threat to individuals, businesses, critical infrastructure, and national security",
    ],
  },
  "gp-topics-12": {
    defs: [
      "Culture: the shared values, beliefs, customs, behaviours, and artefacts that characterise a group of people",
      "Cultural imperialism: the domination of one culture over others through media, trade, and political influence",
    ],
    facts: [
      "Cultural identity provides a sense of belonging and community but can also lead to exclusion of others",
      "UNESCO World Heritage Sites: protect places of outstanding cultural or natural significance for humanity",
      "Diaspora communities: groups living outside their country of origin who maintain their cultural traditions",
      "Religion is a major source of cultural identity; religious extremism can be a source of conflict",
      "Traditional practices may be valued cultural heritage or may violate human rights (e.g. child marriage, FGM)",
      "Youth culture often drives social and cultural change, sometimes creating tension with older generations",
    ],
  },
  "gp-topics-13": {
    defs: [
      "Infrastructure: the fundamental physical systems a society needs to function (roads, power grids, water supply, internet)",
      "Sustainable transport: methods of moving people and goods that minimise environmental impact",
    ],
    facts: [
      "Lack of infrastructure limits economic development and access to education and healthcare in rural areas",
      'Belt and Road Initiative (China): large-scale infrastructure investment in Asia, Africa, and Europe; debated as development vs "debt trap diplomacy"',
      "Electric vehicles reduce local air pollution but depend on clean electricity generation and require rare mineral mining",
      "Aviation emits ~2.5% of global CO₂; it is difficult to decarbonise; carbon offset schemes are controversial",
      "Investment in public transport is more energy-efficient per passenger than private car use",
      "Smart cities use sensor networks and data analytics to manage traffic, waste, and energy more efficiently",
    ],
  },
  "gp-topics-14": {
    defs: [
      "Food security: when all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food",
      "Water scarcity: the lack of sufficient available freshwater resources to meet the demands of water users",
    ],
    facts: [
      "~828 million people are chronically hungry (FAO 2022); about one-third of all food produced globally is wasted",
      "Industrial agriculture produces high yields but causes soil degradation, water overuse, and pesticide pollution",
      "GM crops can increase yield and pest resistance; controversial due to ecological risks and corporate control",
      "Only 3% of Earth's water is fresh; agriculture uses ~70% of all freshwater withdrawals",
      "Drip irrigation delivers water directly to plant roots — reduces agricultural water use by up to 70%",
      'Virtual water: water embedded in exported food/products; water-stressed nations effectively "export" their scarce water',
    ],
  },
  "gp-topics-15": {
    defs: [
      "Armed conflict: organised use of violence between states or non-state groups for political, territorial, or resource objectives",
      "Peacebuilding: the long-term process of addressing root causes of conflict and creating conditions for lasting peace",
    ],
    facts: [
      "UN Security Council: 5 permanent members (USA, UK, France, Russia, China) each with veto power over resolutions",
      "Proxy war: a conflict where external powers support opposing sides without direct military involvement (e.g. Syria, Yemen)",
      "Civilian casualties: modern conflicts increasingly harm civilian populations; protected by Geneva Conventions",
      "Terrorism: use of violence to achieve political/ideological aims; responses include policing and addressing root causes",
      "Nuclear deterrence (MAD): theory that mutual assured destruction prevents major powers from going to war",
      "Post-conflict reconstruction requires transitional justice, economic rebuilding, and social reconciliation",
    ],
  },
  "gp-topics-16": {
    defs: [
      "Pandemic: an epidemic of infectious disease that spreads across multiple countries or continents",
      "Universal Health Coverage (UHC): ensuring all people receive health services they need without financial hardship",
    ],
    facts: [
      "COVID-19 pandemic (from 2020): demonstrated global interconnectedness; accelerated vaccine and mRNA technology development",
      "Non-communicable diseases (NCDs): heart disease, cancer, diabetes — now the leading causes of death worldwide",
      "Communicable diseases (HIV/AIDS, malaria, TB): still cause millions of deaths annually, mainly in low-income countries",
      "WHO (World Health Organization): coordinates global health responses and sets international health standards",
      "Vaccine hesitancy: refusal or reluctance to vaccinate despite availability — a major barrier to disease eradication",
      "Social determinants of health: poverty, education level, clean water access, and sanitation affect health outcomes more than healthcare access alone",
    ],
  },
  "gp-topics-17": {
    defs: [
      "Human rights: the basic rights and freedoms to which every person is entitled regardless of nationality, sex, ethnicity, or religion",
      "Universal Declaration of Human Rights (UDHR): landmark UN document (1948) listing 30 fundamental human rights for all people",
    ],
    facts: [
      "Civil and political rights: right to life, fair trial, free speech, freedom from torture, right to vote",
      "Economic, social, and cultural rights: right to work, education, healthcare, and an adequate standard of living",
      "Amnesty International and Human Rights Watch: NGOs that monitor and campaign against human rights abuses",
      "Sovereignty vs intervention: debate over when outside actors are justified in intervening in a state's internal affairs",
      "LGBTQ+ rights: legal in most Western nations but criminalised in approximately 70 countries as of 2024",
      "Intersectionality: multiple forms of discrimination (e.g. race + gender + class) compound each other",
    ],
  },
  "gp-topics-18": {
    defs: [
      "Lingua franca: a language used as a common means of communication between groups with different native languages",
      "Language endangerment: a language is at risk of dying out because fewer people, especially children, are learning it",
    ],
    facts: [
      "Approximately 7,000 languages exist today; roughly half are endangered and may disappear within a century",
      "English as a global lingua franca facilitates international trade and science but creates a power imbalance",
      "Language loss means cultural loss: each language encodes unique knowledge, metaphors, and ways of understanding the world",
      "Sign languages: hundreds of distinct national sign languages exist globally; separate from spoken languages",
      "Multilingualism is linked to cognitive flexibility, cultural empathy, and economic advantages",
      "AI translation technology is improving rapidly but still struggles with nuance, idiom, and cultural context",
    ],
  },
};
