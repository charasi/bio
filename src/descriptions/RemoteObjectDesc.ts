export const remoteObjectDesc = [
  {
    text:
      "The Remote Objects library is a lightweight remote method procedure framework. " +
      "Inspired by Java’s Remote Method Invocation (RMI), it allows developers to interact " +
      "with remote objects. The system consists of a multithreaded server-side Service " +
      "that exposes remote objects and a client-side StubFactory that generates proxy objects " +
      "to forward method calls over TCP. ",
  },
  {
    text:
      "The service handles connection management, method dispatching, and response encoding, " +
      "while the client stub manages serialization, communication, and error handling." +
      "The library enforces a shared service interface between client and server, " +
      "including support for custom remote exceptions to distinguish protocol-level issues " +
      "from application errors. Also it uses reflection to dynamically handle arbitrary method " +
      "signatures. " +
      "For resilience testing, it includes a LeakySocket wrapper to simulate lossy or delayed " +
      "networks.",
    bullets: {
      title: "Technologies & Concepts:",
      items: [
        "Languages: Go",
        "Core Protocol: TCP with synchronous request-reply model",
        "Dynamic Stub Generation: Reflection-based proxy creation",
        "Server Architecture: Multi-threaded TCP server for concurrent clients",
        "Serialization: Go’s gob encoding",
        "Custom Error Handling: RemoteObjectException / RemoteObjectError",
        "Network Resilience: Simulated packet loss and delay with LeakySocket",
        "Design Patterns: Proxy (Client Stub), Service Interface, Multithreaded Server",
        "Error Recovery: Retransmission on partial failures, graceful service restart",
      ],
    },
    image: "pics/rpc-glance.png",
  },
  {
    image: "pics/remote-object.png",
  },

  // Add more with different image paths
];
