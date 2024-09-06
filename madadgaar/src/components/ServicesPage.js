import React from 'react';
import './ServicesPage.css';


const services = [
    {
      name: 'Chef',
      experience: '50+',
      description: 'We provide dedicated chef services, offering expert culinary professionals to meet your specific needs and elevate your dining experience.',
      image: require('./assets/chefimg.png'),
    },
    {
      name: 'Barber',
      experience: '50+',
      description: 'We provide professional barber services, delivering skilled barbers to cater to your grooming needs with precision and style.',
      image: require('./assets/barber.jpg'),
    },
    {
      name: 'Electrician',
      experience: '50+',
      description: 'Our expert electricians are here to provide top-notch services, ensuring all your electrical needs are met with precision and safety.',
      image: require('./assets/electrician.png'),
    },
    {
      name: 'Nurse',
      experience: '100+',
      description: 'Our expert nurses provide compassionate and professional care, committed to addressing your health needs with the utmost excellence.',
      image: require('./assets/nurse.jpg'),
    },
    {
      name: 'House Keeping',
      experience: '100+',
      description: 'Our housekeepers deliver meticulous and professional cleaning services, ensuring your home is maintained to the highest standards of cleanliness.',
      image: require('./assets/housekeeping.jpg'),
    },
    {
      name: 'Beautician',
      experience: '70+',
      description: 'We have professional beauticians offering personalized services, dedicated to enhancing your beauty with expert care.',
      image: require('./assets/beautician.jpg'),
    },
    {
      name: 'Caterer',
      experience: '40+',
      description: 'Professional catering services for your special events, ensuring a delightful dining experience for your guests.',
      image: require('./assets/caterer.jpg'),
    },
    {
      name: 'DJ/Entertainer',
      experience: '30+',
      description: 'Our DJs provide top-tier entertainment, making your events memorable with amazing music and atmosphere.',
      image: require('./assets/PartyEntertainer.jpg'),
    },
    {
      name: 'Florist',
      experience: '25+',
      description: 'Beautiful flower arrangements for every occasion, delivered by expert florists.',
      image: require('./assets/florist.jpg'),
    },
    {
      name: 'Home Cleaner',
      experience: '100+',
      description: 'Experienced home cleaners ensuring every corner of your home is spotless and fresh.',
      image: require('./assets/homecleaner.jpg'),
    },
    {
      name: 'Interior Decorator',
      experience: '20+',
      description: 'Professional interior decorators to transform your living spaces into beautiful and functional environments.',
      image: require('./assets/Interior Decorator.jpg'),
    },
    {
      name: 'Locksmith',
      experience: '30+',
      description: 'Skilled locksmith services ensuring the security and functionality of your locks.',
      image: require('./assets/Locksmith.jpg'),
    },
    {
      name: 'Massage Therapist',
      experience: '40+',
      description: 'Relax and rejuvenate with professional massage therapy services, tailored to your needs.',
      image: require('./assets/massage.jpg'),
    },
    {
      name: 'Painter',
      experience: '30+',
      description: 'Professional painting services to give your home or business a fresh and vibrant look.',
      image: require('./assets/Painter.jpg'),
    },
    {
      name: 'Personal Chef',
      experience: '50+',
      description: 'Enjoy a personalized dining experience with our dedicated personal chefs who tailor meals to your preferences.',
      image: require('./assets/Personal Chef.jpg'),
    },
    {
      name: 'Realtor',
      experience: '40+',
      description: 'Expert real estate agents to help you buy, sell, or rent properties with ease and confidence.',
      image: require('./assets/Realtor.jpg'),
    },
    {
      name: 'Security Guard',
      experience: '50+',
      description: 'Professional security services to ensure the safety and security of your premises.',
      image: require('./assets/securityguard.jpg'),
    },
    {
      name: 'Travel Agent',
      experience: '30+',
      description: 'Plan your dream vacation with our expert travel agents, offering customized travel packages for every need.',
      image: require('./assets/travelagent.jpg'),
    },
    {
      name: 'Web Developer',
      experience: '20+',
      description: 'Professional web development services to build modern, responsive, and dynamic websites.',
      image: require('./assets/webdeveloper.jpg'),
    },
    {
      name: 'Yoga Instructor',
      experience: '30+',
      description: 'Achieve balance and well-being with personalized yoga sessions from our certified yoga instructors.',
      image: require('./assets/yogainstructor.jpg'),
    },
    {
      name: 'Tutor',
      experience: '50+',
      description: 'Experienced tutors offering personalized education support to students of all ages and skill levels.',
      image: require('./assets/tutor.jpg'),
    },
    {
      name: 'Plumber',
      experience: '30+',
      description: 'Reliable plumbing services to address all your plumbing needs, from installations to repairs.',
      image: require('./assets/plumber.jpg'),
    },
    {
      name: 'Artist',
      experience: '20+',
      description: 'Professional artists offering custom artwork and creative solutions for your personal or business needs.',
      image: require('./assets/artist.jpg'),
    },
    {
      name: 'Designer',
      experience: '20+',
      description: 'Experienced designers providing innovative and creative designs for websites, logos, and more.',
      image: require('./assets/designer.jpg'),
    },
    {
      name: 'Driver',
      experience: '30+',
      description: 'Professional drivers offering safe and reliable transportation services for personal and business needs.',
      image: require('./assets/driver.jpg'),
    },
    {
      name: 'Event Planner',
      experience: '30+',
      description: 'Professional event planning services for weddings, corporate events, and special occasions.',
      image: require('./assets/eventplanner.jpg'),
    },
    {
      name: 'Photographer',
      experience: '40+',
      description: 'Skilled photographers capturing life’s moments with creative and professional photography services.',
      image: require('./assets/photographer.jpg'),
    },
    {
      name: 'Handyman',
      experience: '50+',
      description: 'Reliable handyman services for home repairs, maintenance, and installations.',
      image: require('./assets/handyman.jpg'),
    },
    {
      name: 'Landscaper',
      experience: '30+',
      description: 'Expert landscaping services to enhance the beauty and functionality of your outdoor spaces.',
      image: require('./assets/landscaper.jpg'),
    },
    {
      name: 'Mechanic',
      experience: '40+',
      description: 'Skilled mechanics offering vehicle repair and maintenance services to keep your car running smoothly.',
      image: require('./assets/mechanic.jpg'),
    },
    {
      name: 'Mover',
      experience: '30+',
      description: 'Professional moving services to assist with your relocation needs, ensuring a smooth and efficient process.',
      image: require('./assets/mover.jpg'),
    },
    {
      name: 'Pest Control',
      experience: '30+',
      description: 'Reliable pest control services to keep your home and business free from unwanted pests.',
      image: require('./assets/pestcontrol.jpg'),
    },
    {
      name: 'Personal Trainer',
      experience: '20+',
      description: 'Achieve your fitness goals with personalized training sessions from experienced personal trainers.',
      image: require('./assets/personaltrainer.jpg'),
    },
    {
      name: 'Pet Sitter',
      experience: '30+',
      description: 'Trusted pet sitting services, ensuring your pets are well cared for while you are away.',
      image: require('./assets/petsitter.jpg'),
    },
    {
      name: 'Tech Support',
      experience: '20+',
      description: 'Professional technical support services to troubleshoot and resolve your IT-related issues.',
      image: require('./assets/tech Support.jpg'),
    },
    {
      name: 'Writer',
      experience: '20+',
      description: 'Skilled writers offering professional writing services for content creation, copywriting, and more.',
      image: require('./assets/Writer.jpg'),
    },
  ];
  

function ServicesPage() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-description">
        Explore our diverse range of services designed to meet the needs of the Askari community. From skilled painters and beauticians to expert electricians and chefs, we provide reliable, high-quality solutions right at your doorstep.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-info">
              <h2>{service.name}</h2>
              <p>{service.experience}</p>
              <p>{service.description}</p>
              <button className="enabled-button">Enabled</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
