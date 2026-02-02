
import React from 'react';
import { Brand, SignatureData } from '../types';
import { BRANDS, SOCIAL_ICONS } from '../constants';

interface TemplateProps {
  data: SignatureData;
  brand: Brand;
}

export const SignatureTemplate: React.FC<TemplateProps> = ({ data, brand }) => {
  const config = BRANDS[brand];
  
  // Standardized Font/Colors across all brands (Ansley standard)
  const standardFont = 'Helvetica, Arial, sans-serif';
  const colorName = '#333333';
  const colorTitle = '#666666';
  const colorInfo = '#666666';
  const colorSecondary = '#999999';

  const renderLine = (label: string, value: string, color = colorInfo) => {
    if (!value) return null;
    return (
      <span style={{ fontSize: '9pt', color }}>
        {label}: {value}<br />
      </span>
    );
  };

  const SocialLinks = ({ alignment = 'left' }: { alignment?: 'left' | 'center' }) => {
    const activeSocials = Object.entries(config.socials).filter(([_, url]) => !!url);
    if (activeSocials.length === 0) return null;

    return (
      <table cellPadding="0" cellSpacing="0" border={0} style={{ marginTop: '10px' }} align={alignment}>
        <tr>
          {activeSocials.map(([platform, url]) => (
            <td key={platform} style={{ paddingRight: '8px' }}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={SOCIAL_ICONS[platform as keyof typeof SOCIAL_ICONS]} 
                  alt={platform} 
                  width="22" 
                  height="22" 
                  style={{ display: 'block', border: 0 }}
                />
              </a>
            </td>
          ))}
        </tr>
      </table>
    );
  };

  switch (brand) {
    case Brand.AT_PROPERTIES:
      return (
        <table cellPadding="0" cellSpacing="0" border={0} style={{ 
          fontFamily: standardFont, 
          maxWidth: '600px',
          paddingTop: '10px'
        }}>
          <tr>
            <td valign="middle" style={{ paddingRight: '20px' }}>
              <a href={config.website} target="_blank" rel="noopener noreferrer">
                <img src={config.logo} alt="@properties" width="160" style={{ display: 'block', border: 0 }} />
              </a>
            </td>
            <td width="1" style={{ borderLeft: '1px solid #000' }}></td>
            <td valign="middle" style={{ paddingLeft: '15px' }}>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ fontSize: '12pt', color: colorTitle }}>{data.name || 'John Smith'}</strong><br />
                <span style={{ fontSize: '9pt', color: colorInfo }}>{data.jobTitle || 'Real Estate Broker'}</span>
              </div>
              <div style={{ fontSize: '9pt', color: colorSecondary, lineHeight: '1.5' }}>
                {data.mobile && <span>M: {data.mobile}<br /></span>}
                {data.office && <span>O: {data.office}<br /></span>}
                <a href={`mailto:${data.email || 'john.smith@atproperties.com'}`} style={{ color: colorSecondary, textDecoration: 'none' }}>{data.email || 'john.smith@atproperties.com'}</a><br />
                <a href={config.website} style={{ color: colorSecondary, textDecoration: 'none' }}>{config.website.replace('https://', '')}</a><br />
                <span>@properties Christie's International Real Estate</span><br />
                <span>{data.address || '123 Business Way, City, ST 12345'}</span>
              </div>
              <SocialLinks />
            </td>
          </tr>
        </table>
      );

    case Brand.CHRISTIES:
      return (
        <table cellPadding="0" cellSpacing="0" border={0} style={{ fontFamily: standardFont, color: colorInfo }}>
          <tr>
            <td valign="middle" style={{ paddingRight: '20px' }}>
              <a href={config.website} target="_blank" rel="noopener noreferrer">
                <img src={config.logo} alt="Christie's Logo" width="150" style={{ display: 'block', border: 0 }} />
              </a>
            </td>
            <td width="1" style={{ borderLeft: '1px solid #cccccc' }}></td>
            <td valign="middle" style={{ paddingLeft: '20px' }}>
              <div style={{ marginBottom: '5px' }}>
                <strong style={{ fontSize: '12pt', color: colorName }}>{data.name || 'John Smith'}</strong><br />
                <em style={{ fontSize: '10pt', color: colorTitle }}>{data.jobTitle || 'Real Estate Professional'}</em>
              </div>
              <div style={{ fontSize: '9pt', lineHeight: '1.4' }}>
                {renderLine('Mobile', data.mobile)}
                {renderLine('Office', data.office)}
                <a href={`mailto:${data.email}`} style={{ color: colorInfo, textDecoration: 'none' }}>{data.email || 'john.smith@example.com'}</a><br />
                <a href={config.website} style={{ color: colorInfo, textDecoration: 'none' }}>{config.website.replace('https://', '')}</a>
              </div>
              <div style={{ fontSize: '8pt', color: colorSecondary, marginTop: '10px' }}>
                <strong>{brand}</strong><br />
                {data.address || '123 Business Way, City, ST 12345'}
              </div>
              <SocialLinks />
            </td>
          </tr>
        </table>
      );

    case Brand.ANSLEY:
      return (
        <table cellPadding="0" cellSpacing="0" border={0} style={{ fontFamily: standardFont, color: colorInfo }}>
          <tr>
            <td valign="middle" style={{ paddingRight: '20px' }}>
              <a href={config.website} target="_blank" rel="noopener noreferrer">
                <img src={config.logo} alt="Ansley Logo" width="140" style={{ display: 'block', border: 0 }} />
              </a>
            </td>
            <td width="1" style={{ borderLeft: '1px solid #000' }}></td>
            <td valign="top" style={{ paddingLeft: '20px' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ fontSize: '11pt', color: colorName }}>{data.name || 'John Smith'}</strong><br />
                <span style={{ fontSize: '9pt', color: colorTitle }}>{data.jobTitle || 'Associate Broker'}</span><br />
                {data.license && <span style={{ fontSize: '9pt', color: colorSecondary }}>License: {data.license}</span>}
              </div>
              <div style={{ fontSize: '9pt', color: colorSecondary, lineHeight: '1.5' }}>
                {renderLine('M', data.mobile, colorSecondary)}
                {renderLine('O', data.office, colorSecondary)}
                <a href={`mailto:${data.email}`} style={{ color: colorSecondary, textDecoration: 'none' }}>{data.email || 'john.smith@example.com'}</a><br />
                <a href={config.website} style={{ color: colorSecondary, textDecoration: 'underline' }}>{config.website.replace('https://', '')}</a>
              </div>
              <div style={{ fontSize: '9pt', color: colorSecondary, marginTop: '8px' }}>
                <span>{brand}</span><br />
                <span>{data.address || '123 Business Way, City, ST 12345'}</span>
              </div>
              <SocialLinks />
            </td>
          </tr>
        </table>
      );

    case Brand.SUBURBAN_JUNGLE:
      // This is now effectively handled in App.tsx by showing "COMING SOON" instead of calling this template
      return null;

    default:
      return null;
  }
};
