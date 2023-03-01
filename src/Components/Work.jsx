import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et '
        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum'
        }
    ]

    return (
        <div className={'work-section-wrapper'}>
          <div className={'work-section-top'}>
            <p className={'primary-subheading'}>
              Work
            </p>
            <h1 className={'primary-heading'}>
              How It Works
            </h1>
            <p className={'primary-text'}>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt
              magna non et elit. Dolor  turpis molestie dui
              magnis facilisis at fringilla quam.
            </p>
          </div>
          <div className={'work-section-bottom'}>
            {workInfoData.map((item) => (
                <div key={item.text} className={'work-section-info'}>
                  <div className={'info-boxes-img-container'}>
                    <img src={item.image} alt="Icon"/>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
            ))}
          </div>
        </div>
    )
}

export default Work