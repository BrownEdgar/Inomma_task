
import React from 'react';
import { Select } from 'antd';
import { VIEW_OPTIONS } from '../../utils/constants/productTypes';
export default function Selectvariant({ onChange }) {
  return (
    <Select
      defaultValue={VIEW_OPTIONS[0].label}
      style={{ width: 150 }}
      bordered
      options={VIEW_OPTIONS}
      onChange={(e) => onChange(e)}
    />
  )
}
