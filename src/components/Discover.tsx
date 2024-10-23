import React from "react";

const Discover = () => {
  return (
    <section className="discover-area relative mt-8 pb-20 lg:pb-20">
      <div className="container">
        <div
          data-aos="fade-down"
          className="max-w-2xl mb-8 lg:mb-24 relative z-40"
        >
          <h3 className="text-3xl lg:text-5xl mb-4 lg:mb-6">
            Discover what
            <span className="text-gradient font-bold harmonyos-sans-bold ">
              {" "}
              Drives Us
            </span>
          </h3>
          <p className="text-extsy">
            Transforming the Crypto Experience Through Expertise, Passion, and a
            Focus on Creating Value for Our Community
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid md:grid-cols-12 items-center gap-4 relative z-40"
        >
          <div className="md:col-span-6">
            <div className="flex gap-8 mb-4">
              <div className="lg:pe-12">
                <h3 className="text-2xl lg:text-5xl text-white font-bold">
                  98%
                </h3>
                <p className="text-xs lg:text-md text-extsy text-center">
                  Triumph Rate
                </p>
              </div>
              <div className="lg:pe-12">
                <h3 className="text-2xl lg:text-5xl text-white font-bold">
                  1M+
                </h3>
                <p className="text-xs lg:text-md text-extsy text-center">
                  Satisfied Clients
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-5xl text-white font-bold">
                  &#60; 5 min
                </h3>
                <p className="text-xs lg:text-md text-extsy text-center">
                  Average Exchange Time
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="text-extsy">
              Our platform is driven by a commitment to making digital finance
              simple, secure, and accessible. With features like crypto swaps,
              buying, selling, trading, virtual cards, and even raffles, we aim
              to provide an all-in-one solution for your digital asset needs.
              Our focus is on delivering a seamless experience that empowers you
              to explore and engage with the world of decentralized finance
              confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
