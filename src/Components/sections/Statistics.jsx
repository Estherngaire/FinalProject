function Statistics() {
  const Stat = [
            /* Statistics section content goes here */  
            {label: 'CountriesReached', value: '5+'},
            {label: 'CustomerSatisfaction', value: '96%'},
            {label: 'CuratedProducts', value: '500+'},
            {label: 'YearsOfExperience', value: '10+'},
        ];
  return(   
    <section className="statistics py-12 bg-secondary mt-10 w-full max-w-[1440px] mx-auto h-auto">
      <div className="mx-auto grid grid-cols-3 md:grid-cols-4 gap-8 text-center rounded-lg">
        {Stat.map((stat, index) => ( 
          <div key={index} className="stat-item ">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{stat.value}</h4>
            <p className="text-lg text-neutralDark">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>  
  )
};

      

export default Statistics;