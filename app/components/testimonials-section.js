import Component from '@ember/component';

export default Component.extend({
  testimonials: Object.freeze([
    {
      name: 'Daniel Humenik',
      text: "Sam interned with the IT team at Innovu during COVID-19 in the summer of 2020. Due to Coronavirus, Sam worked remotely, however this did not inhibit his desire and passion to jump right in and learn. Sam quickly learned how to setup a LAMP stack. Sam used that knowledge to to research and improve our asset management system. Sam deployed a new asset management system locally, tested the functionality and demonstrated the product to the IT team. This system was adopted by the IT due to Sam's work. Sam continued to demonstrate his abilities to learn quickly by using Perl and Python to develop scripts that quickly reconciled a rather time-intensive process. Sam was an absolute pleasure to work with during his internship at Innovu. Sam displayed great time management, passion and desire to learn, and his ability to work independently and as a team. I know Sam will be an industry leader in a few short years!",
      imageUrl: 'dan.png',
      link: 'https://www.linkedin.com/in/samuel-bordo-825688174/details/recommendations/',
    },
    // {
    //   name: 'Anthony Lukasavage',
    //   text: 'Coming soon',
    //   imageUrl: 'tony.png',
    //   link: 'https://www.linkedin.com/in/samuel-bordo-825688174/details/recommendations/',
    // },
    // Add as many testimonials as you like
  ]),
});
