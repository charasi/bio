export const bookDesc = [
  {
    text:
      "Book-Service was a hands-on project in my Engineering Data Intensive Scalable Systems course. " +
      "It introduced core technologies and architectural patterns behind modern distributed systems. " +
      "The course emphasized building scalable, cloud-native solutions using real-world tools and " +
      "concepts such as microservices, publish-subscribe messaging, and fault-tolerant design.",
    bullets: {
      title: "Technologies & Concepts:",
      items: [
        "AWS Services: EC2, VPC, CloudFormation (CF)",
        "Database: MySQL on AWS RDS",
        "API Development & Testing: Postman",
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
