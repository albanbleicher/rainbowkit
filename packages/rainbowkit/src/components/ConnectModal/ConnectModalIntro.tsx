import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { increaseHitAreaForHoverTransform } from '../../css/increaseHitAreaForHoverTransform.css';
import { Box } from '../Box/Box';
import { ActionButton } from '../Button/ActionButton';
import { AssetsIcon } from '../Icons/Assets';
import { LoginIcon } from '../Icons/Login';
import { AppContext } from '../RainbowKitProvider/AppContext';

import { Text } from '../Text/Text';

export function ConnectModalIntro({ getWallet }: { getWallet: () => void }) {
  const { learnMoreUrl } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <>
      <Box
        alignItems="center"
        color="accentColor"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ gap: 62 }}
      >
        <Text color="modalText" size="18" weight="heavy">
          {t('What is a Wallet?')}
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          gap="32"
          height="full"
          justifyContent="center"
          style={{ maxWidth: 312 }}
        >
          <Box alignItems="center" display="flex" flexDirection="row" gap="16">
            <Box borderRadius="6" height="48" minWidth="48" width="48">
              <AssetsIcon />
            </Box>
            <Box display="flex" flexDirection="column" gap="4">
              <Text color="modalText" size="14" weight="bold">
                {t('A Home for your Digital Assets')}
              </Text>
              <Text color="modalTextSecondary" size="14" weight="medium">
                {t('Wallets are used to')}
              </Text>
            </Box>
          </Box>
          <Box alignItems="center" display="flex" flexDirection="row" gap="16">
            <Box borderRadius="6" height="48" minWidth="48" width="48">
              <LoginIcon />
            </Box>
            <Box display="flex" flexDirection="column" gap="4">
              <Text color="modalText" size="14" weight="bold">
                {t('A New Way to Log In')}
              </Text>
              <Text color="modalTextSecondary" size="14" weight="medium">
                {t('Instead of creating new accounts')}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="12"
          justifyContent="center"
          marginTop="8"
        >
          <ActionButton label={t('Get a Wallet')} onClick={getWallet} />
          <Box
            as="a"
            className={increaseHitAreaForHoverTransform.grow}
            display="block"
            href={learnMoreUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Box
              paddingX="12"
              paddingY="4"
              style={{ willChange: 'transform' }}
              transform={{ active: 'shrink', hover: 'grow' }}
              transition="default"
            >
              <Text color="accentColor" size="14" weight="bold">
                {t('Learn More')}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
