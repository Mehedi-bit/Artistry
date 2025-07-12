import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      title: "A vibrant platform for artisans",
      content: [
        "Handmade Haven has been a game-changer for me as an artisan. It’s the perfect place to showcase and sell my handmade pottery. The platform is user-friendly, and I love how it connects me with customers who truly appreciate creativity and craftsmanship.",
        "Thanks to Handmade Haven, I’ve been able to expand my customer base and grow my passion into a sustainable business."
      ],
      name: "Sara Ahmed",
      role: "Handmade Pottery Artist",
      img: "https://static.vecteezy.com/system/resources/previews/020/381/678/non_2x/aesthetic-cute-muslim-girl-with-hijab-flat-detailed-avatar-illustration-beautiful-muslim-woman-hijabi-cartoon-vector.jpg",
    },
    {
      title: "A marketplace that values creativity",
      content: [
        "As a painter, finding a platform that truly understands and supports creative work was a challenge until I discovered Handmade Haven. The community here is fantastic, and the tools provided make selling art pieces seamless.",
        "I’ve connected with customers who appreciate the effort behind every stroke of my brush. Highly recommend Handmade Haven to all creatives!"
      ],
      name: "Rajib Hassan",
      role: "Fine Arts Painter",
      img: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a74f49e4ae12986f0d9e75_Drew%20Cano-p-500.jpg",
    },
    {
      title: "Effortless and rewarding for crafters",
      content: [
        "Handmade Haven has provided me with an incredible opportunity to showcase my handmade jewelry to a wider audience. The platform’s focus on handmade and artistic creations resonates perfectly with my brand.",
        "The customer support team is excellent, and the ease of setting up a shop here makes it the ideal choice for artisans like me."
      ],
      name: "Ayesha Haque",
      role: "Jewelry Designer",
      img: "https://img.freepik.com/free-photo/view-3d-woman-wearing-hijab_23-2151112551.jpg",
    },
    {
      title: "A supportive platform for creative entrepreneurs",
      content: [
        "Handmade Haven has been the stepping stone for turning my passion for woodworking into a full-fledged business. The exposure and sales I’ve gained here have been incredible.",
        "The platform is easy to use, and the community is so supportive. It’s truly built for those who love art and craftsmanship."
      ],
      name: "Anik Chowdhury",
      role: "Woodworking Craftsman",
      img: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a751cf3f6e8c895132ef81_Lyle%20Kauffman-p-500.jpg",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Hear from artisans and creatives who’ve turned their passion into success with Handmade Haven.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ${
                index % 2 === 0 ? "lg:border-r" : ""
              } dark:bg-gray-800 dark:border-gray-700`}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.title}
                </h3>
                {testimonial.content.map((paragraph, i) => (
                  <p className="my-4" key={i}>
                    {paragraph}
                  </p>
                ))}
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src={testimonial.img}
                  alt={`${testimonial.name} profile`}
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#F56400] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Show more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
