import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../hooks/flipAnimation.ts";
import bookservice from "/pics/bookservice.png";
import { useState } from "react";

export const BookService = () => {
  const { flipState, setFlipState } = useFlipStore();
  const [isReady, setIsReady] = useState(false);

  const { imgRef, textRef } = useFlipAnimation({
    flipState,
    setFlipState,
    setIsReady,
  });

  return (
    <div className="flex bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen overflow-visible px-8 pt-24">
      {/* Left column */}
      <div className="flex flex-col items-center mr-8">
        <span className="text-white text-4xl font-bold mb-4">Book-Service</span>
        <img
          src={bookservice}
          alt="Book Service"
          ref={imgRef}
          data-flip-id="Book-Service"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-4"
        />
        <a
          href="https://github.com/charasi/"
          target="_blank"
          className="btn bg-[#ffe500] rounded-tr-[8px] rounded-br-none
          rounded-tl-none rounded-bl-[8px] font-sans leading-[24px] py-2 px-6
          transition duration-300 ease-in-out hover:scale-110"
        >
          Launch
        </a>
      </div>

      {/* Divider */}
      <div className="h-[450px] w-0.5 bg-white/10 mr-8" />

      {/* Right content */}
      <div className="flex flex-col space-y-6 overflow-visible">
        <h1 className="text-white text-2xl font-bold">
          <span className="text-red-400 text-3xl">[ </span>
          Ongoing
          <span className="text-red-400 text-3xl"> ]</span>
        </h1>
        <p
          className="text-white text-justify font-medium leading-relaxed max-w-4xl"
          style={{ opacity: isReady ? 1 : 0 }}
          ref={textRef}
        >
          Book-Service was a hands-on project developed for the course 17-647:
          Engineering Data Intensive Scalable Systems, which focuses on
          designing and building scalable, distributed, cloud-native systems.
          The objective of this project was to gain practical experience with
          microservice communication, data transformation, and event-driven
          patterns commonly used in production-grade systems.
          <br />
          <br />
          The core challenge was to implement a backend-for-frontend (BFF)
          system that sits between a Catalog-Service and a Search-Service, both
          of which manage their data independently and emit different schema
          formats. Rather than coupling these services directly, Book-Service
          acts as a mediator: consuming events from the Catalog-Service via
          Kafka, transforming the data into the expected format, and publishing
          them to the Search-Service’s topic.
          <br />
          <br />
          I wrote the service in Go, using the Sarama client to connect with
          Apache Kafka. The transformation logic parses incoming Kafka events,
          remaps fields to align with the target schema, and forwards the
          cleaned data to downstream consumers. Postman was used throughout for
          testing API contracts and ensuring the expected behavior of the
          services in isolation.
          <br />
          <br />
          This project helped reinforce core concepts like schema evolution,
          eventual consistency, decoupled architecture, and message-driven
          design—concepts that are foundational in modern distributed systems.
          It was an excellent opportunity to apply theoretical knowledge in a
          realistic setting where scalability, reliability, and modular design
          matter.
        </p>
      </div>
    </div>
  );
};
