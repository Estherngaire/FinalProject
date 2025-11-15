function Statistics() {
  const Stat = [
            /* Statistics section content goes here */  
            {label: 'CountriesReached', value: '5+'},
            {label: 'CustomerSatisfaction', value: '96%'},
            {label: 'CuratedProducts', value: '500+'},
            {label: 'YearsOfExperience', value: '10+'},
        ];
  return(   
    <section className="statistics py-12 bg-pink-600 mt-10 w-1440px h-300px top-1700px">
      <div className="mx-auto grid grid-cols-3 md:grid-cols-4 gap-8 text-center text-neutralDark">
        {Stat.map((stat, index) => ( 
          <div key={index} className="stat-item">
            <h4 className="text-4xl font-bold mb-2">{stat.value}</h4>
            <p className="text-lg text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>  
  )
};

      

export default Statistics;