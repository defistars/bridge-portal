import { Connector } from 'wagmi';
import { ICONS_MAP } from '@bridge-portal/svg-icons';

export interface WalletOption {
  source: Connector;
  logo: JSX.Element | null;
  name: string;
}

export const buildWalletOptions = (connectors: Connector[]): WalletOption[] => {
  return connectors
    .filter((connector: Connector) =>
      // ['metamask'].includes(connector.type.toLowerCase())
      ['io.metamask', 'app.phantom'].includes(connector.id.toLowerCase())
    )
    .map((connector: Connector) => {
      let logo: JSX.Element | null = null;
      switch (connector.id.toLowerCase()) {
        case 'io.metamask':
          logo = ICONS_MAP['icon-metamask'];
          break;
        case 'app.phantom':
          logo = ICONS_MAP['icon-phantom'];
          break;
        default:
          break;
      }
      return {
        source: connector,
        logo,
        name: connector.name,
      };
    });
};
