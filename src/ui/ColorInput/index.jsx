import React from 'react'
import { func, string } from 'prop-types'

import './styles.css'

function ColorInput({ value, onSelect }) {
  return (
    <div className="input--color">
      <label className="input-color__label">Badge color</label>
      <ul>
        <li>
          <button
            onClick={() => onSelect('blue')}
            className={`input-color__button blue ${
              value === 'blue' ? 'is-selected' : ''
            }`}
          >
            Blue
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('green')}
            className={`input-color__button green ${
              value === 'green' ? 'is-selected' : ''
            }`}
          >
            Green
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('grey')}
            className={`input-color__button grey ${
              value === 'grey' ? 'is-selected' : ''
            }`}
          >
            Grey
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('purple')}
            className={`input-color__button purple ${
              value === 'purple' ? 'is-selected' : ''
            }`}
          >
            Purple
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('red')}
            className={`input-color__button red ${
              value === 'red' ? 'is-selected' : ''
            }`}
          >
            Red
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('yellow')}
            className={`input-color__button yellow ${
              value === 'yellow' ? 'is-selected' : ''
            }`}
          >
            Yellow
          </button>
        </li>
      </ul>
    </div>
  )
}

ColorInput.propTypes = {
  value: string.isRequired,
  onSelect: func.isRequired
}

export default ColorInput
