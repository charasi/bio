export const raftDesc = [
  {
    text:
      "The focus of this project was implementing the Raft consensus algorithm from scratch in Go, " +
      "demonstrating how distributed nodes can reliably reach agreement despite crashes, message " +
      "loss, or network partitions.  The project involved building a complete Raft peer capable of " +
      "participating in elections, replicating logs, and ensuring consistency across a cluster. " +
      "Each peer maintained its own state and communicated over a custom RPC layer, " +
      "coordinating to elect a leader and synchronize logs.",
    bullets: {
      title: "Technologies & Concepts",
      items: [
        "AWS Services: EC2, VPC, CloudFormation (CF)",
        "Database: MySQL on AWS RDS",
        "API Development & Testing: Node.js with Express (or other language/framework), Postman",
        "Containerization & Orchestration: Docker, Kubernetes, AWS EKS",
        "Authentication & API Gateway: JWT (JSON Web Tokens), BFF (Backend for Frontend) pattern",
        "Software Design Principles: Single Responsibility Principle",
        "Messaging System: Kafka (Publish-Subscribe)",
        "Resilience Patterns: Circuit Breaker, Bulkheads",
        "Search & Indexing: Elasticsearch",
        "Service Data Architecture: Service Data Replication, CQRS (Command Query Responsibility Segregation)",
        "Scheduled Synchronization: Cronjob batch programs",
        "Log-based Sync: Logstash and other data sync mechanisms",
      ],
    },
    image: "pics/bs-architecture.png",
  },
  {
    image: "pics/bs-deployment.png",
  },

  // Add more with different image paths
];
