export const subjectSyllabus = [ 
  {
    "course_title": "Database Management Systems",
    "course_code": "MCA2101",
    "course_objectives": [
      "Explain the concept of databases, database management systems, database structures and how they work.",
      "Make use of Entity-Relationship Modeling and Relational Modeling for creating simple databases from real world scenarios.",
      "Write relational algebra and structured query language (SQL) statements.",
      "Normalize a database using Normalization Rules.",
      "Discuss the issues associated with Transaction Management and Recovery, Tree Structured and Hash-Based Indexing."
    ],
    lab:"yes",
    "units": [
      {
        "unit_title": "UNIT I: Introduction to Databases",
        "topics": [
          "Introduction",
          "An Example",
          "Characteristics of the Database Approach",
          "Actors on Scene",
          "Workers behind the Scene",
          "Advantages of Using the DBMS Approach",
          "A Brief History of Database Applications",
          "When Not to Use a DBMS",
          "Overview of Database Languages and Architectures",
          "Data Models, Schemas and Instances",
          "Three-Schema Architecture and Data Independence",
          "Database Languages and Interfaces",
          "The Database System Environment",
          "Centralized and Client/Server Architecture for DBMSs",
          "Classification of Database Management Systems"
        ]
      },
      {
        "unit_title": "UNIT II: Introduction to Database Design",
        "topics": [
          "Database Design and ER Diagrams",
          "Entities, Attributes and Entity Sets",
          "Relationships and Relationship Sets",
          "Additional Features of the ER Model",
          "Conceptual Design with the ER Model",
          "Conceptual Design for Large Enterprises",
          "Relational Model",
          "Introduction to the Relational Model",
          "Integrity Constraints over Relations",
          "Enforcing Integrity Constraints",
          "Querying Relational Data",
          "Logical Database Design: ER to Relational",
          "Introduction to Views",
          "Destroying/Altering Tables and Views"
        ]
      },
      {
        "unit_title": "UNIT III: Relational Algebra and SQL",
        "topics": [
          "Selection and Projection",
          "Set Operations",
          "Renaming",
          "Joins",
          "Division",
          "More Examples of Algebra Queries",
          "The Form of a Basic SQL Query",
          "UNION, INTERSECT and EXCEPT",
          "Nested Queries",
          "Aggregate Operators",
          "Null Values",
          "Complex Integrity Constraints in SQL",
          "Triggers and Active Databases",
          "Designing Active Databases"
        ]
      },
      {
        "unit_title": "UNIT IV: Introduction to Normalization Using Functional and Multivalued Dependencies",
        "topics": [
          "Informal Design Guidelines for Relation Schema",
          "Functional Dependencies",
          "Normal Forms Based on Primary Keys",
          "General Definitions of Second and Third Normal Forms",
          "Boyce-Codd Normal Form",
          "Multivalued Dependency and Fourth Normal Form",
          "Join Dependencies and Fifth Normal Form"
        ]
      },
      {
        "unit_title": "UNIT V: Transaction Management and Concurrency Control",
        "topics": [
          "Transaction Concept",
          "A Simple Transaction Model",
          "Storage Structure",
          "ACID Properties",
          "Serializability",
          "Transaction Isolation Levels",
          "Concurrency Control",
          "Lock-Based Protocols",
          "Validation-Based Protocols"
        ]
      }
    ],
    "course_outcomes": [
      "Illustrate the concept of databases, database management systems, database languages, database structures and their work.",
      "Apply ER modeling and Relational modeling for designing simple databases.",
      "Summarize the concepts related to relational model and SQL and Write database queries using relational algebra and structured query language.",
      "Design and develop databases from the real world by applying the concepts of Normalization.",
      "Outline the issues associated with Transaction Management and Recovery, Tree Structured and Hash-Based Indexing."
    ],
    "textbooks": [
      {
        "title": "Database Management Systems",
        "edition": "3/e",
        "authors": ["Raghurama Krishnan", "Johannes Gehrke"],
        "publisher": "Mc Graw-Hill"
      },
      {
        "title": "Database System Concepts",
        "edition": "6/e",
        "authors": ["Abraham Silberschatz", "Henry F. Korth", "S. Sudarshan"],
        "publisher": "Mc Graw-Hill"
      },
      {
        "title": "Database Systems",
        "edition": "6/e",
        "authors": ["Ramez Elmasri", "Shamkant B. Navathe"],
        "publisher": "Pearson"
      }
    ],
    "reference_books": [
      {
        "title": "Database Systems",
        "edition": "9/e",
        "authors": ["Carlos Coronel", "Steven Morris", "Peter Rob"],
        "publisher": "Cengage"
      },
      {
        "title": "Introduction to Database Systems",
        "edition": "8/e",
        "authors": ["C. J. Date"],
        "publisher": "Pearson"
      }
    ]
  },

  {
    "course_title": "Computer Networks",
    "course_code": "MCA2102",
    "course_objectives": [
      "Understand the fundamental concepts of computer networking and OSI Reference model.",
      "Familiarize the student with the basic taxonomy and terminology of the computer networking area.",
      "Learn and understand the advanced networking concepts, preparing the student for entry advanced courses in computer networking.",
      "Develop and gain expertise in some specific areas of networking such as the design and maintenance of individual networks."
    ],
    lab:"yes",
    "units": [
      {
        "unit_title": "UNIT I: Introduction",
        "topics": [
          "Network Topologies: WAN, LAN, MAN",
          "Reference models: The OSI Reference Model, the TCP/IP Reference Model",
          "A Comparison of the OSI and TCP/IP Reference Models",
          "Physical Layer: Introduction to physical layer",
          "Data and Signals, Periodic analog signals, digital signals, transmission impairment",
          "Data rate limits, performance",
          "Introduction to Guided Media: Twisted-pair cable, Coaxial cable and Fiber optic cable",
          "Unguided media: Wireless-Radio waves, microwaves, infrared"
        ]
      },
      {
        "unit_title": "UNIT II: The Data Link Layer",
        "topics": [
          "Services Provided to the Network Layer",
          "Framing",
          "Error Control",
          "Flow Control",
          "Error Detection and Correction",
          "Error-Correcting Codes",
          "Error Detecting Codes",
          "Elementary Data Link Protocols",
          "A Utopian Simplex Protocol",
          "A Simplex Stop and Wait Protocol for an Error free channel",
          "A Simplex Stop and Wait Protocol for a Noisy Channel",
          "Sliding Window Protocols",
          "A One Bit Sliding Window Protocol",
          "A Protocol Using Go-Back-N",
          "A Protocol Using Selective Repeat"
        ]
      },
      {
        "unit_title": "UNIT III: The Medium Access Control Sub-layer",
        "topics": [
          "The Channel Allocation Problem",
          "Static Channel Allocation",
          "Assumptions for Dynamic Channel Allocation",
          "Multiple Access Protocols",
          "Aloha: Pure aloha, slotted aloha",
          "Carrier Sense Multiple Access Protocols",
          "Collision-Free Protocols",
          "Limited Contention Protocols",
          "Wireless LAN Protocols",
          "Ethernet: Classic Ethernet Physical Layer, Classic Ethernet MAC Sub-layer Protocol",
          "Ethernet Performance",
          "Fast Ethernet",
          "Wireless LANs: The 802.11 Architecture and Protocol Stack",
          "The 802.11 Physical Layer, The 802.11 MAC Sub-layer Protocol",
          "The 802.11 Frame Structure, Services"
        ]
      },
      {
        "unit_title": "UNIT IV: The Network Layer",
        "topics": [
          "Design Issues",
          "Store and Forward Packet Switching",
          "Services Provided to the Transport layer",
          "Implementation of Connectionless Service",
          "Implementation of Connection-Oriented Service",
          "Comparison of Virtual Circuit and Datagram Networks",
          "Routing Algorithms: The Optimality principle, Shortest path, Flooding, Distance vector, Link state, Hierarchical",
          "Congestion Control algorithms: General principles of congestion control, Congestion prevention policies",
          "Traffic Aware Routing, Admission Control, Traffic Throttling, Load Shedding",
          "Internet Working: How networks differ, How networks can be connected",
          "Tunneling, Internetwork routing, Fragmentation",
          "Network layer in the internet – IP protocols",
          "IP Version 4 protocol, IP addresses, Subnets",
          "IP Version 6: The main IPV6 header",
          "Internet control protocols: ICMP, ARP, DHCP"
        ]
      },
      {
        "unit_title": "UNIT V: The Transport Layer",
        "topics": [
          "Transport layer protocols: Introduction, services, port number",
          "User Datagram Protocol: UDP services, UDP applications",
          "Transmission Control Protocol: TCP services, TCP features, Segment",
          "A TCP connection, Windows in TCP, Flow control, Error control",
          "Application Layer",
          "World Wide Web: HTTP, FTP, Two connections: control connection, Data connection",
          "Security of FTP",
          "Electronic mail: Architecture, web-based mail, email security",
          "TELNET: Local versus remote logging",
          "Domain Name System: Name Space, DNS in Internet, Resolution, Caching, Resource Records",
          "DNS messages, Registrars, Security of DNS Name Servers"
        ]
      }
    ],
    "course_outcomes": [
      "Explain the network architecture, TCP/IP and OSI reference models",
      "Identify and understand various techniques and modes of transmission",
      "Demonstrate the data link protocols, multi-channel access protocols and IEEE 802 standards for LAN",
      "Describe routing and congestion in network layer with routing algorithms and classify IPV4 addressing scheme",
      "Discuss the elements and protocols of transport layer",
      "Develop network security and define various protocols such as FTP, HTTP, Telnet, DNS"
    ],
    "textbooks": [
      {
        "title": "Computer Networks",
        "edition": "5/e",
        "authors": ["Andrew S Tanenbaum", "David J. Wetherall"],
        "publisher": "Pearson"
      },
      {
        "title": "Data Communications and Networking",
        "edition": "5/e",
        "authors": ["Behrouz Forouzan"],
        "publisher": "McGraw Hill"
      },
      {
        "title": "Data and Computer Communications",
        "edition": "10/e",
        "authors": ["William Stallings"],
        "publisher": "Pearson"
      }
    ],
    "reference_books": [
      {
        "title": "Computer Networks – A System Approach",
        "edition": "2/e",
        "authors": ["Peterson", "Bruce Davie"],
        "publisher": "Harcourt Asia"
      },
      {
        "title": "Compute Communications and Networking Technologies",
        "authors": ["Gallo", "Hancock"],
        "publisher": "Cengage"
      },
      {
        "title": "An Engineering Approach to Computer Networking",
        "authors": ["Kesha"],
        "publisher": "Pearson"
      }
    ]
  },
  {
    "course_title": "Object Oriented Programming using JAVA",
    "course_code": "MCA1103",
    "course_objectives": [
      "To understand the basic concepts of object-oriented programming concepts.",
      "To introduce the principles of inheritance and polymorphism and demonstrate how they are related to the design of abstract classes.",
      "To understand the implementation of packages and interfaces.",
      "To introduce the concept of multithreading and exception handling.",
      "To learn and understand the design of Graphical User Interface using applets and swing controls."
    ],
    lab:"yes",
    "units": [
      {
        "unit_title": "UNIT I: Basics of Object Oriented Programming (OOP)",
        "topics": [
          "Need for OO paradigm",
          "A way of viewing the world: Agents, responsibility, messages, methods, classes and instances",
          "Class hierarchies (Inheritance), method binding, overriding and exceptions",
          "Summary of OOP concepts, coping with complexity, abstraction mechanisms",
          "Java Basics: Data types, variables, scope and lifetime of variables",
          "Arrays, operators, expressions, control statements, type conversion and casting",
          "Simple Java program",
          "Concepts of classes, objects, constructors, methods, access control, this keyword",
          "Garbage collection, overloading methods and constructors",
          "Parameter passing, recursion, string handling"
        ]
      },
      {
        "unit_title": "UNIT II: Inheritance and Interfaces",
        "topics": [
          "Hierarchical abstractions: Base class object, subclass, subtype, substitutability",
          "Forms of inheritance: Specialization, specification, construction, extension, limitation, combination",
          "Benefits and costs of inheritance",
          "Member access rules, super uses, using final with inheritance",
          "Polymorphism, abstract classes",
          "Packages and Interfaces: Defining, creating, and accessing a package",
          "Understanding CLASSPATH, importing packages",
          "Differences between classes and interfaces",
          "Defining an interface, implementing interface",
          "Applying interface variables in interface and extending interfaces"
        ]
      },
      {
        "unit_title": "UNIT III: Exception Handling and Multithreading",
        "topics": [
          "Concepts of exception handling, benefits of exception handling",
          "Termination or presumptive models, exception hierarchy",
          "Usage of try, catch, throws, and finally",
          "Built-in exceptions, creating own exception subclasses",
          "Differences between multithreading and multitasking",
          "Thread life cycle, creating threads, synchronizing threads",
          "Daemon threads, thread groups"
        ]
      },
      {
        "unit_title": "UNIT IV: Event Handling",
        "topics": [
          "Events, Event sources, Event classes, Event Listeners",
          "Delegation event model, handling mouse and keyboard events",
          "Adapter classes, inner classes",
          "The AWT class hierarchy",
          "User-interface components: Labels, buttons, canvas, scrollbars, text components",
          "Check box, check box groups, choices, list panes, scroll pane, dialogs",
          "Menu bar, graphics",
          "Layout manager types: Border, grid, flow, card, and grid bag"
        ]
      },
      {
        "unit_title": "UNIT V: Applets and Swings",
        "topics": [
          "Concepts of Applets, differences between applets and applications",
          "Lifecycle of an applet, types of applets",
          "Creating applets, passing parameters to applets",
          "Swings: Introduction, limitations of AWT, MVC architecture",
          "Components and containers in Swing: JApplet, JFrame, JComponent",
          "Icons and Labels, text fields, buttons (JButton class)",
          "Check boxes, Radio Buttons, Combo boxes",
          "Tabbed panes, Scroll panes, Trees, and Tables"
        ]
      }
    ],
    "course_outcomes": [
      "Describe the uses of OOP concepts",
      "Apply OOP concepts to solve real world problems",
      "Distinguish the concept of packages and interfaces",
      "Demonstrate exception handling and multithread applications with synchronization",
      "Design GUI-based applications using AWT and Swings",
      "Discuss the Collection Framework"
    ],
    "textbooks": [
      {
        "title": "Java-The Complete Reference",
        "edition": "7/e",
        "authors": ["Herbert Schildt"],
        "publisher": "TMH"
      },
      {
        "title": "JAVA: How to Program",
        "edition": "8/e",
        "authors": ["Dietal", "Dietal"],
        "publisher": "PHI"
      },
      {
        "title": "Introduction to Programming with JAVA",
        "authors": ["S. Dean"],
        "publisher": "TMH"
      },
      {
        "title": "Introduction to Java Programming",
        "edition": "6/e",
        "authors": ["Y. Daniel Liang"],
        "publisher": "Pearson"
      }
    ],
    "reference_books": [
      {
        "title": "Core Java 2, Vol 1 (Vol 2) Fundamentals (Advanced)",
        "edition": "7/e",
        "authors": ["Cay S. Horstmann", "Gary Cornell"],
        "publisher": "Pearson"
      },
      {
        "title": "Big Java 2, 3/e",
        "authors": ["Cay S. Horstmann"],
        "publisher": "Wiley"
      },
      {
        "title": "Object Oriented Programming through Java",
        "authors": ["P. Radha Krishna"],
        "publisher": "University Press"
      },
      {
        "title": "JAVA & Object Orientation an Introduction",
        "edition": "2/e",
        "authors": ["John Hunt"],
        "publisher": "Springer"
      },
      {
        "title": "Introduction to JAVA Programming",
        "edition": "7/e",
        "authors": ["Y. Daniel Liang"],
        "publisher": "Pearson, TMH"
      }
    ]
  },
  {
    "course_title": "Design and Analysis of Algorithms",
    "course_code": "MCA2104",
    "course_objectives": [
      "To provide an introduction to formalisms to understand, analyze, and denote time complexities of algorithms.",
      "To introduce the different algorithmic approaches for problem solving through numerous example problems.",
      "To provide some theoretical grounding in terms of finding the lower bounds of algorithms and the NP-completeness."
    ],
    "units": [
      {
        "unit_title": "UNIT I: Introduction",
        "topics": [
          "Algorithm, Pseudocode for expressing algorithms",
          "Performance Analysis: Space complexity, Time complexity, Asymptotic Notation",
          "Big O notation, Omega notation, Theta notation and Little o notation",
          "Probabilistic analysis, Amortized analysis",
          "Disjoint Sets: Disjoint set operations, union and find algorithms",
          "Spanning trees, connected components, and bi-connected components"
        ]
      },
      {
        "unit_title": "UNIT II: Divide and Conquer and Greedy Method",
        "topics": [
          "Divide and conquer: General method, applications",
          "Binary search, Quick sort, Merge sort, Strassen’s matrix multiplication",
          "Greedy method: General method, applications",
          "Job sequencing with deadlines, 0/1 knapsack problem",
          "Minimum cost spanning trees, Single-source shortest path problem"
        ]
      },
      {
        "unit_title": "UNIT III: Dynamic Programming",
        "topics": [
          "Dynamic Programming: General method, applications",
          "Matrix chain multiplication, Optimal binary search trees",
          "0/1 knapsack problem, All pairs shortest path problem",
          "Travelling salesperson problem, Reliability design"
        ]
      },
      {
        "unit_title": "UNIT IV: Backtracking",
        "topics": [
          "Backtracking: General method, applications",
          "n-queen problem, sum of subsets problem",
          "Graph coloring, Hamiltonian cycles"
        ]
      },
      {
        "unit_title": "UNIT V: Branch and Bound and NP-Hard Problems",
        "topics": [
          "Branch and Bound: General method, applications",
          "Travelling salesperson problem, 0/1 knapsack problem",
          "LC Branch and Bound solution, FIFO Branch and Bound solution",
          "NP-Hard and NP-Complete problems: Basic concepts, non-deterministic algorithms",
          "NP-Hard and NP-Complete classes, Cook's theorem"
        ]
      }
    ],
    "course_outcomes": [
      "Describe asymptotic notation used for denoting performance of algorithms",
      "Analyze the performance of a given algorithm and denote its time complexity using the asymptotic notation for recursive and non-recursive algorithms",
      "List and describe various algorithmic approaches",
      "Solve problems using divide and conquer, greedy, dynamic programming, backtracking and branch and bound algorithmic approaches",
      "Apply graph search algorithms to real world problems",
      "Demonstrate an understanding of NP-Completeness theory and lower bound theory"
    ],
    "textbooks": [
      {
        "title": "Fundamentals of Computer Algorithms",
        "authors": ["Ellis Horowitz", "Satraj Sahni", "Rajasekharam"],
        "publisher": "Universities Press",
        "edition": "2/e"
      },
      {
        "title": "The Algorithm Design Manual",
        "authors": ["Steven S. Skiena"],
        "publisher": "Springer",
        "edition": "2/e"
      },
      {
        "title": "Introduction to Algorithms",
        "authors": ["T.H. Cormen", "C.E. Leiserson", "R.L. Rivest", "C. Stein"],
        "publisher": "PHI Pvt. Ltd",
        "edition": "2/e"
      }
    ],
    "reference_books": [
      {
        "title": "Introduction to the Design and Analysis of Algorithms",
        "authors": ["Anany Levitin"],
        "publisher": "PEA",
        "edition": "3/e"
      },
      {
        "title": "Design and Analysis of Algorithms",
        "authors": ["Parag Himanshu Dave", "Himansu Balachandra Dave"],
        "publisher": "Pearson Education",
        "edition": "2/e"
      },
      {
        "title": "Introduction to Design and Analysis of Algorithms: A Strategic Approach",
        "authors": ["R.C.T. Lee", "S.S. Tseng", "R.C. Chang", "T. Tsai"],
        "publisher": "McGraw-Hill",
        "edition": "2005"
      },
      {
        "title": "Design and Analysis of Algorithms",
        "authors": ["Aho", "Ullman", "Hopcroft"],
        "publisher": "Pearson Education",
        "edition": "1/e"
      }
    ]
  },
      
]

export const dbmsLab = [{
    "course_title": "Database Management Systems Lab",
    "course_code_lab": "MCA2101-lab",
    "course_objectives": [
      "Populate and query a database using SQL DDL/DML Commands.",
      "Declare and enforce integrity constraints on a database.",
      "Writing Queries using advanced concepts of SQL.",
      "Programming PL/SQL including procedures, functions, cursors, and triggers."
    ],
    "list_of_experiments": [
      "Execute all DDL, DML, and DCL commands on sample tables.",
      "Implementation of different types of operators and built-in functions with suitable examples.",
      "Implementation of different types of joins with suitable examples.",
      "Create views, partitions, Sequence, Indexes, and locks for a particular DB.",
      "Implement different types of constraints on relations.",
      "Implementation of subqueries and nested queries.",
      "Implement Queries on Group By & Having Clauses, ALIAS, Sequence By, Order By.",
      {
        "experiment_title": "Control Structure",
        "tasks": [
          "Write a PL/SQL block for Addition of Two Numbers.",
          "Write a PL/SQL block for IF, IF and else condition.",
          "Write a PL/SQL block for implementation of loops.",
          "Write a PL/SQL block for greatest of three numbers using IF and ELSEIF."
        ]
      },
      {
        "experiment_title": "Exception Handling",
        "tasks": [
          "Implement the following with respect to exception handling: Raising Exceptions, User Defined Exceptions, Pre-Defined Exceptions."
        ]
      },
      {
        "experiment_title": "PL/SQL Procedures",
        "tasks": [
          "Write a PL/SQL Procedure using Positional Parameters.",
          "Write a PL/SQL Procedure using notational parameters.",
          "Write a PL/SQL Procedure for GCD Numbers.",
          "Write a PL/SQL Procedures for cursor implementation (explicit and implicit cursors)."
        ]
      },
      {
        "experiment_title": "Functions",
        "tasks": [
          "Write a PL/SQL block to implement factorial using functions.",
          "Write a PL/SQL function to search an address from the given database."
        ]
      },
      "Write a DBMS program to prepare PL/SQL reports for an application using functions.",
      {
        "experiment_title": "Triggers",
        "tasks": [
          "Write a Trigger to pop-up the DML operations.",
          "Write a Trigger to check if the age is valid or not using Message Alert.",
          "Create a Trigger to Raise appropriate error code and error message.",
          "Create a Trigger on a table so that it will update another table while inserting values."
        ]
      },
      "Write PL/SQL block for an application using cursors and all types of triggers.",
      "Write a PL/SQL block for transaction operations of a typical application using package."
    ],
    "course_outcomes": [
      "Utilize SQL to execute queries for creating a database and performing data manipulation operations.",
      "Examine integrity constraints to build efficient databases.",
      "Apply Queries using Advanced Concepts of SQL.",
      "Build PL/SQL programs including stored procedures, functions, cursors, and triggers."
    ],
    "textbooks": [
      {
        "title": "Oracle: The Complete Reference",
        "author": "Oracle Press"
      },
      {
        "title": "Database Systems Using Oracle",
        "author": "Nilesh Shah",
        "publisher": "PHI",
        "year": "2007"
      },
      {
        "title": "Introduction to SQL",
        "author": "Rick F Vander Lans",
        "publisher": "Pearson Education",
        "edition": "4th",
        "year": "2007"
      }
    ],
  },

  ]

  


export const  computerNetworkLab = {
    "course_title": "Computer Networks Lab",
    "course_code_lab" : "MCA2102-lab",
    "course_objectives": [
      "Understand the fundamental concepts of computer networking and OSI Reference model.",
      "Familiarize the student with the basic taxonomy and terminology of the computer networking area.",
      "Learn and understand the advanced networking concepts, preparing the student for entry advanced courses in computer networking.",
      "Develop and gain expertise in some specific areas of networking such as the design and maintenance of individual networks."
    ],
    "part_a_experiments": [
      "Implement the data link layer framing methods such as character stuffing and bit stuffing.",
      "Implement on a data set of characters the three CRC polynomials – CRC 12, CRC 16 and CRC CCIP.",
      "Implement Dijkstra's algorithm to compute the Shortest path through a graph.",
      "Take an example subnet graph with weights indicating delay between nodes. Now obtain Routing table at each node using distance vector routing algorithm.",
      "Take an example subnet of hosts. Obtain broadcast tree for it."
    ],
    "part_b_experiments": [
      {
        "experiment_title": "Inter-process Communication (IPC)",
        "tasks": [
          "Implement Pipes.",
          "Implement FIFO."
        ]
      },
      "Implement file transfer using Message Queue form of IPC.",
      "Write a programme to create an integer variable using shared memory concept and increment the variable simultaneously by two processes. Use semaphores to avoid race conditions.",
      "Design TCP iterative Client and server application to reverse the given input sentence.",
      "Design TCP client and server application to transfer file.",
      "Design a TCP concurrent server to convert a given text into upper case using multiplexing system call 'select'.",
      "Design a TCP concurrent server to echo given set of sentences using poll functions.",
      "Design UDP Client and server application to reverse the given input sentence.",
      "Design UDP Client server to transfer a file.",
      "Design using poll client-server application to multiplex TCP and UDP requests for converting a given text into upper case.",
      "Design a RPC application to add and subtract a given pair of integers."
    ],
    "course_outcomes": [
      "Explain the network architecture, TCP/IP, and OSI reference models.",
      "Identify and understand various techniques and modes of transmission.",
      "Demonstrate the data link protocols, multi-channel access protocols, and IEEE 802 standards for LAN.",
      "Describe routing and congestion in the network layer with routing algorithms and classify IPV4 addressing scheme.",
      "Discuss the elements and protocols of the transport layer.",
      "Develop network security and define various protocols such as FTP, HTTP, Telnet, DNS."
    ],
    "textbooks": [
      {
        "title": "Computer Networks",
        "author": "Andrew S Tanenbaum, David J. Wetherall",
        "edition": "5/e",
        "publisher": "Pearson"
      },
      {
        "title": "Data Communications and Networking",
        "author": "Behrouz Forouzan",
        "edition": "5/e",
        "publisher": "McGraw Hill"
      },
      {
        "title": "Data and Computer Communications",
        "author": "William Stallings",
        "edition": "10/e",
        "publisher": "Pearson"
      }
    ],
    "reference_books": [
      {
        "title": "Computer Networks – A System Approach",
        "author": "Peterson, Bruce Davie",
        "edition": "2/e",
        "publisher": "Harcourt Asia"
      },
      {
        "title": "Compute Communications and Networking Technologies",
        "author": "Gallo, Hancock",
        "publisher": "Cengage"
      },
      {
        "title": "An Engineering Approach to Computer Networking",
        "author": "Kesha",
        "publisher": "Pearson"
      }
    ]
  }

export const javaLab = {
    "course_code": "MCA1108",
    course_code_lab: "MCA1103-lab",
    "course_title": "Java Programming Lab",
    "course_objectives": [
      "To understand how to design, implement, test, debug, and document programs that use basic data types and computation, simple I/O, conditional and control structures, string handling and functions.",
      "To understand the importance of Classes & objects along with constructors, Arrays and Vectors.",
      "Discuss the principles of inheritance, interface and packages and demonstrate through problem analysis assignments how they relate to the design of methods, abstract classes and interfaces and packages.",
      "To understand importance of Multi-threading & different exception handling mechanisms.",
      "To learn experience of designing, implementing, testing, and debugging graphical user interfaces in Java using applet and AWT that respond to different user events.",
      "To understand Java Swings for designing GUI applications based on MVC architecture."
    ],
    "list_of_experiments": [
      "The Fibonacci sequence is defined by the following rule. The first 2 values in the sequence are 1, 1. Every subsequent value is the sum of the 2 values preceding it. Write a Java Program that uses both recursive and non-recursive functions to print the nth value of the Fibonacci sequence.",
      "Write a Java Program that prompts the user for an integer and then prints out all the prime numbers up to that Integer.",
      "Write a Java Program that checks whether a given string is a palindrome or not. Ex. MALAYALAM is a palindrome.",
      "Write a Java Program for sorting a given list of names in ascending order.",
      "Write a Java Program that illustrates how runtime polymorphism is achieved.",
      "Write a Java Program to create and demonstrate packages.",
      "Write a Java Program, using StringTokenizer class, which reads a line of integers and then displays each integer and the sum of all integers.",
      "Write a Java Program that reads a file name from the user then displays information about whether the file exists, whether the file is readable/writable, the type of file and the length of the file in bytes and display the content of the file using FileInputStream class.",
      "Write a Java Program that displays the number of characters, lines, and words in a text/text file.",
      "Write an Applet that displays the content of a file.",
      "Write a Java Program that works as a simple calculator. Use a grid layout to arrange buttons for the digits and for the +-*?% operations. Add a text field to display the result.",
      "Write a Java Program for handling mouse events.",
      "Write a Java Program demonstrating the life cycle of a thread.",
      "Write a Java Program that lets users create Pie charts. Design your own user interface (with Swings & AWT).",
      "Write a Java Program to implement a Queue, using user defined Exception Handling (also make use of throw, throws)."
    ],
    "course_outcomes": [
      "At the end of the course, students will be able to:",
      "Apply OOP concepts to solve real world problems.",
      "Implement different forms of inheritance.",
      "Create packages and to reuse them.",
      "Implement multi-threaded programs using synchronization concepts.",
      "Create user-defined exceptions.",
      "Design GUI applications using AWT and SWINGS."
    ],
    "textbooks": [
      {
        "title": "Java-The Complete Reference",
        "author": "Herbert Schildt",
        "edition": "7/e",
        "publisher": "TMH"
      },
      {
        "title": "JAVA: How to Program",
        "author": "Dietal, Dietal",
        "edition": "8/e",
        "publisher": "PHI"
      },
      {
        "title": "Introduction to Programming with JAVA",
        "author": "S. Dean",
        "edition": "TMH"
      },
      {
        "title": "Introduction to Java Programming",
        "author": "Y. Daniel Liang",
        "edition": "6/e",
        "publisher": "Pearson"
      }
    ],
    "reference_books": [
      {
        "title": "Core Java 2, Vol 1(Vol 2) Fundamentals (Advanced)",
        "author": "Cay S. Horstmann, Gary Cornell",
        "edition": "7/e",
        "publisher": "Pearson"
      },
      {
        "title": "Big Java 2",
        "author": "Cay S. Horstmann",
        "edition": "3/e",
        "publisher": "Wiley"
      },
      {
        "title": "Object Oriented Programming through Java",
        "author": "P. Radha Krishna",
        "edition": "1/e",
        "publisher": "University Press"
      },
      {
        "title": "JAVA & Object Orientation: An Introduction",
        "author": "John Hunt",
        "edition": "2/e",
        "publisher": "Springer"
      },
      {
        "title": "Introduction to JAVA Programming",
        "author": "Y. Daniel Liang",
        "edition": "7/e",
        "publisher": "Pearson, TMH"
      }
    ]
  }
  