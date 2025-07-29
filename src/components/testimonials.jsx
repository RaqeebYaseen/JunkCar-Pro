const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <div className="p-4 shadow rounded bg-gray-50">
          <p>"So easy to use, got paid same day!"</p>
          <strong>- Sarah, TX</strong>
        </div>
        <div className="p-4 shadow rounded bg-gray-50">
          <p>"I got the highest quote here!"</p>
          <strong>- David, GA</strong>
        </div>
        <div className="p-4 shadow rounded bg-gray-50">
          <p>"Pickup was scheduled fast."</p>
          <strong>- Jennifer, WA</strong>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
