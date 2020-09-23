import React from 'react';
import './Resume.css';

const content = [
  {
    value1: 'l was born in Katowice',
    value2:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
    value3: '1990',
  },
  {
    value1: 'Secondary school specializing in artistic',
    value2:
      'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
    value3: 2005,
  },
  {
    value1: 'First level graduation in Graphic Design',
    value2:
      'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores underepellat.',
    value3: 2009,
  },
  {
    value1: 'Second level graduation in Graphic Design',
    value2: 'Ducimus, aliquam tempore autem itaque et accusantium!',
    value3: '2012',
  },
];

class Resume extends React.Component {
  render() {
    return content.map((element, index = 1) => (
      <div key={index++}>
        <div id="years">{element.value3}</div>
        <div id="resume">
          <p className="p3">{element.value1}</p>
          <p className="p4">{element.value2}</p>
        </div>
      </div>
    ));
  }
}

export default Resume;
