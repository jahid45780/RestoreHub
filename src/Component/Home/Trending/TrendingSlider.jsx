import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TrendingSlider = ({trending}) => {
    return (
<div className='mt-10'> 
<div>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
            },
        }}
    >
        {trending?.map((singleTrend, index) => (
            <SwiperSlide key={index}>
                <img className='object-cover h-80 w-90' src={singleTrend?.image} alt="" />
                <div className="rating rating-xs flex items-center gap-2 ">
                    <input
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                    />
                    <input
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                    />
                    <h2 className='text-3xl mt-2 font-bold'>{singleTrend.rating}</h2>
                </div>
                <h2 className='text-3xl mt-2 font-bold'>{singleTrend.title}</h2>
                <p className='mt-4 text-sm font-semibold'>${singleTrend?.price}</p>
                <button className="btn btn-block bg-[#6EA963] font-extrabold mt-4">Add To Cart</button>
                <p className='text-lg mt-3 text-center text-[#BF757B] font-semibold'>
                    {singleTrend?.dis}
                </p>
            </SwiperSlide>
        ))}
    </Swiper>
</div>
</div>

    );
};

export default TrendingSlider;