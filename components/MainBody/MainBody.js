import React, {useState} from 'react';
import Image from 'next/image'

const MainBody = () => {
    const [items, setItems] = useState(cardItems[0])

    const itemClickHandler = (id) =>{
        setItems(cardItems[id-1]);
    }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 px-[10%] md:py-[117px] '>
        <div className="card-details md:m-5 m-1">
            <h1 className='text-white font-mono font-extrabold uppercase text-4xl sm:text-4xl md:text-[80px]'>{items.title}</h1>
            <p className='text-lg text-white mt-10'>{items.description}</p>
            <button className='text-lg font-semibold text-black bg-[#F9A41A] px-6 py-2 rounded-md mt-10'>booking</button>
        </div>
        <div className="card-img m-5 col-span-2 flex gap-3 justify-center flex-wrap">
            {
                cardItems.map(item => <div className={`hover:border-[#F9A41A] rounded-3xl border-4 border-transparent hover:border-4`}  key={item.id}>
                    <Image onClick={()=> itemClickHandler(item.id) } src={item.img} alt='' width={'300px'} height={'450px'} /> 
                    </div>)
            }
        </div>
    </div>
  )
}

export default MainBody;

const cardItems =[
    {
        id:1,
        title: `Sajek`,
        description:'orem ipsum dolor sit, amet consectetur adipisicing elit. Alias at impedit nobis voluptatibus distinctio odit illum veniam magni! distinctio odit illum veniam magni! distinctio odit illum veniam magni!',
        img:'/images/Sajek.png'
    },
    {
        id:2,
        title: `Sreemongol`,
        description:'orem ipsum dolor sit, amet consectetur adipisicing elit. Alias at impedit nobis voluptatibus',
        img:'/images/Sreemongol.png'
    },
    {
        id:3,
        title: `sundorbon`,
        description:'orem ipsum dolor sit, amet consectetur adipisicing elit. Alias at impedit nobis voluptatibus distinctio odit illum veniam magni!  distinctio odit illum veniam magni!',
        img:'/images/sundorbon.png'
    }
]