import { Select } from 'antd'
import './selector.css'
import { FC } from 'react'
import { Patterns } from '../../../store/patterns'

interface SelectorProps {
  onChange: (val: string) => void
}

export const Selector: FC<SelectorProps> = ({ onChange }) => {
 
  const glassStyle =  {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(20px)',
    fontSize: '20px'
  }

  return (
    <Select
    showSearch
    style={{ width: '100%'}}
    size="large"
    onChange={onChange}
    dropdownStyle={glassStyle}
    placeholder="Search to Select"
    allowClear
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={
      Patterns.map(p => 
        (
          {value:p.name, label: p.name }
        )
      )
    }
  />
         
  )
}
