import React, { useState, useEffect } from 'react'
import { string, number, func } from 'prop-types'

import './styles.css'

function TextInput({ label, name, value, onChange, maxLength, placeholder }) {
  const [remainingCharacters, setRemainingCharacters] = useState(maxLength || 0)

  useEffect(() => {
    if (maxLength && value) {
      setRemainingCharacters(maxLength - value.length)
    } else if (maxLength) {
      setRemainingCharacters(maxLength)
    }
  }, [value, maxLength])

  function onChangeText(event) {
    onChange(event.target.value)
  }

  return (
    <div className="input--text">
      <div className="input-text__labels">
        <label htmlFor={name}>{label}</label>
        {maxLength ? (
          <span
            data-testid="RemainingCharactersCount"
            className="input-text__remaining-chars"
          >
            {remainingCharacters}
          </span>
        ) : null}
      </div>
      <input
        type="text"
        id={name}
        value={value}
        maxLength={maxLength && maxLength}
        onChange={onChangeText}
        placeholder={placeholder}
      />
    </div>
  )
}

TextInput.propTypes = {
  label: string,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  maxLength: number,
  placeholder: string
}

TextInput.defaultProps = {
  label: '',
  maxLength: 0,
  placeholder: ''
}

export default TextInput
