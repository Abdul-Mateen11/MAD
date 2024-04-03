// RTLToggle.js

import React from 'react';
import { Switch } from 'react-native';
import { useTranslation } from 'react-i18next';

const RTLToggle = ({ isRTL, onChange }) => {
  const { t } = useTranslation();

  return (
    <Switch
      value={isRTL}
      onValueChange={onChange}
      accessibilityLabel={t('rtlToggle')}
    />
  );
};

export default RTLToggle;
