interface users {
    id: number;
    nowhatsap:string;
    maps:string;
}

interface ProductInfoProps {
   users: users[];
}

export default function ProductInfo({ users }: ProductInfoProps) {


  return (
    <section className="w-full ">
      <div className="w-full max-w-4xl mx-auto mb-6">
        <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-[400px]">
         
          <iframe
           
            src={users[0].maps}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
      
        </div>
      </div>

      <div className="text-center">
       
  <a
  
    href={`https://wa.me/${users[0].nowhatsap}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow transition duration-300 m-2"
  >
    Hubungi via WhatsApp
  </a>


      </div>
    </section>
  );
}
