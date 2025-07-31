export const k8desc = [
  {
    text:
      "K8-Hardway is a DevOps infrastructure project that automates the full " +
      "“Kubernetes the Hard Way” workflow using Jenkins, Terraform, Ansible, and GCP. " +
      "Built as an infrastructure as code pipeline, it demonstrates key practices in " +
      "distributed systems, CI/CD automation, and secure cloud provisioning.",
  },
  {
    text:
      "The project tackles the complexity of manually bootstrapping Kubernetes—covering compute " +
      "provisioning, certificates, networking, and HA setup—by codifying the entire process " +
      "without relying on packaged installers.",
  },

  {
    bullets: {
      title: "Cloud Infrastructure (Terraform & GCP):",
      items: [
        "VPC, firewall rules, target node provisioning, MySQL database setup, and " +
          "static IP mapping via reusable Terraform modules",
        "Controller and worker instances, centralized private bucket for PEM files, " +
          "and defined output variables to propagate infra IDs between modules",
      ],
    },
  },
  {
    bullets: {
      title: "Continuous Integration & Orchestration (Jenkins):",
      items: [
        "Jenkins master connects to GCP-provisioned agents using SSH, transferring keys, " +
          "scanning known hosts, and triggering agent.jar execution via JNLP",
        "Jenkins API used to create nodes and jobs programmatically using " +
          "jenkinsapi, with secrets fetched and agents authenticated via WebSocket",
        "Programmatic installation of plugins (e.g., Ansible, BlueOcean) " +
          "with plugin restarts handled in setup script",
      ],
    },
  },
  {
    bullets: {
      title: "Secure Communication (PKI & TLS):",
      items: [
        "CFSSL installation via Ansible automates fetching, setting permissions, and moving PKI " +
          "tools like cfssl and cfssljson into the system path for secure key/cert generation",
        "Credential handling uses gsutil to pull private keys and distribute them securely to " +
          "agent nodes for authentication and TLS bootstrapping",
      ],
    },
  },
  {
    bullets: {
      title: "Infrastructure Automation (Ansible):",
      items: [
        "YAML playbooks install Kubernetes CLI tools (kubectl) and " +
          "CFSSL binaries on controller nodes",
        "Playbook targets k8main group with elevated privileges and supports " +
          "idempotent operations",
      ],
    },
  },
  {
    bullets: {
      title: "CI Job Execution Flow:",
      items: [
        "Jenkins jobs install-k8, create-certificates, create-etcd, create-controllers, " +
          "create-rbac, create-workers",
        "Each job reads from XML definitions, runs sequentially, and checks " +
          "for build success before proceeding—terminating early on any failure",
        "PEM files, agent binaries, and other job artifacts are downloaded " +
          "from the central GCS bucket using gsutil via SSH commands from Jenkins",
      ],
    },
  },

  // Add more with different image paths
];
