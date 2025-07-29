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
        "Modules Used: VPC, firewall rules, target node provisioning, MySQL database setup, and " +
          "static IP mapping via reusable Terraform modules",
        "Resources: Created controller and worker instances, a centralized private bucket for PEM files, " +
          "and defined output variables to propagate infra IDs between modules",
      ],
    },
  },
  {
    bullets: {
      title: "Remote Communication:",
      items: ["Custom RPC library built with Go"],
    },
  },
  {
    bullets: {
      title: "Core Raft Features Implemented:",
      items: [
        "Leader election using randomized election timeouts and term-based voting",
        "Log replication leader sends AppendEntries RPCs to followers; consistency enforced via " +
          "term/index checks",
        "Heartbeat mechanism regular empty AppendEntries messages to assert leadership",
        "State transitions: Follower → Candidate → Leader cycle with proper term/state management",
        "Crash and recovery peers deactivated and reactivated via Activate/Deactivate, simulating " +
          "real world failures",
      ],
    },
  },
  {
    bullets: {
      title: "Concurrency:",
      items: [
        "Coordinated goroutines and channel-based signaling to manage timeouts, RPCs, and state " +
          "transitions",
      ],
    },
  },
  {
    bullets: {
      title: "Safety Guarantees:",
      items: [
        "Only one leader elected per term",
        "Logs are consistent across all non-faulty peers",
        "Committed entries are never lost or reordered",
        "All peers eventually apply the same log entries in order",
      ],
    },
  },
  {
    bullets: {
      title: "Testing and Validation:",
      items: [
        "Automated tests simulated unreliable networks, message delays, and node failures",
        "Passed all required checkpoints and final evaluations for correctness under failure",
      ],
    },
  },

  // Add more with different image paths
];

export const pending = [
  {
    title: "Upcoming Work",
    text:
      "These upcoming tasks are planned enhancements to improve the Raft consensus system’s " +
      "functionality and usability:",
  },
  {
    bullets: {
      title: "Raft Visualization:",
      items: [
        "Interactive tool to demonstrates the Raft consensus algorithm’s",
        "To aid in understanding and debugging",
      ],
    },
  },
  {
    bullets: {
      title: "Cluster membership changes:",
      items: [
        "Enable dynamic addition and removal of nodes in the Raft cluster without disrupting consensus",
      ],
    },
  },
  {
    bullets: {
      title: "Log compaction:",
      items: [
        "Reduces the size of the replicated log to optimize storage and improve performance",
      ],
    },
  },
];

// Only extract titles that have bullets
export const raftTitleIds: string[] = k8desc
  .map((section, index) =>
    section.bullets ? `#raft-title-text-${index}` : null,
  )
  .filter((id): id is string => id !== null);
