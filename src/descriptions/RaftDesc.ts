export const raftDesc = [
  {
    text:
      "The focus of this project was implementing the Raft consensus algorithm from scratch in Go, " +
      "demonstrating how distributed nodes can reliably reach agreement despite crashes, message " +
      "loss, or network partitions.  The project involved building a complete Raft peer capable of " +
      "participating in elections, replicating logs, and ensuring consistency across a cluster. " +
      "Each peer maintained its own state and communicated over a custom RPC layer, " +
      "coordinating to elect a leader and synchronize logs.",
  },
  {
    text:
      "The project involved building a complete Raft peer capable of participating in elections, " +
      "replicating logs, and ensuring consistency across a cluster. Each peer maintained its own " +
      "state and communicated over a custom RPC layer, coordinating to elect a leader and " +
      "synchronize logs.",
  },
  {
    image: "pics/raft-goal.png",
  },
  {
    bullets: {
      title: "Languages:",
      items: [
        "Go for goroutines and strong support for networked systems development",
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
        "Interactive tool to demonstrates the Raft consensus algorithm",
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
export const raftTitleIds: string[] = raftDesc
  .map((section, index) =>
    section.bullets ? `#raft-title-text-${index}` : null,
  )
  .filter((id): id is string => id !== null);
