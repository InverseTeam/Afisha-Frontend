'use client';

import { FC } from 'react';
import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import './styles.css';

export const RadioGroup: FC = () => {
  return (
    <form>
      <RadioGroupRadix.Root
        className="RadioGroupRoot"
        defaultValue="default"
        aria-label="View density">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroupRadix.Item className="RadioGroupItem" value="default" id="r1">
            <RadioGroupRadix.Indicator className="RadioGroupIndicator" />
          </RadioGroupRadix.Item>
          <label className="Label" htmlFor="r1">
            Default
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroupRadix.Item className="RadioGroupItem" value="comfortable" id="r2">
            <RadioGroupRadix.Indicator className="RadioGroupIndicator" />
          </RadioGroupRadix.Item>
          <label className="Label" htmlFor="r2">
            Comfortable
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroupRadix.Item className="RadioGroupItem" value="compact" id="r3">
            <RadioGroupRadix.Indicator className="RadioGroupIndicator" />
          </RadioGroupRadix.Item>
          <label className="Label" htmlFor="r3">
            Compact
          </label>
        </div>
      </RadioGroupRadix.Root>
    </form>
  );
};
