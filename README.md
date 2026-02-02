# AT WORLD PROPERTIES EMAIL SIGNATURE GENERATOR

A professional, world-class tool designed for **At World Properties** brokers and staff to generate consistent, brand-aligned email signatures. This application provides a seamless interface for inputting personal details and instantly generating standardized signatures for multiple real estate brand identities.

## 🚀 Features

- **Multi-Brand Support**: Instantly toggle between signature styles for:
  - `@Properties`
  - `Christie's International Real Estate`
  - `Ansley Real Estate`
  - `Suburban Jungle` (Coming Soon)
- **Live Preview**: Real-time updates as you type your personal details.
- **Standardized Design**: Unified fonts (Ansley standard), colors, and layouts across all brand identities for professional consistency.
- **High Compatibility**: Generates signatures using legacy HTML tables to ensure perfect rendering across all major email clients (Gmail, Outlook, Apple Mail, etc.).
- **Dual Copy Modes**:
  - **Copy Signature**: Copies the rich-text/formatted version directly to your clipboard for easy pasting into mail settings.
  - **Copy HTML**: Copies the raw source code for advanced users or specific system requirements.

## 🛠 Tech Stack

- **React 19**: Modern UI component architecture.
- **Tailwind CSS**: Rapid, responsive utility-first styling.
- **TypeScript**: Robust type safety for brand configurations and data models.
- **ES Modules**: Modern import/export structure using `esm.sh`.

## 📂 Project Structure

- `App.tsx`: The main application shell, handling state management and form logic.
- `components/SignatureTemplates.tsx`: Contains the modular rendering logic for each brand's unique signature layout.
- `constants.ts`: Centralized configuration for brand assets, logos, and social media links.
- `types.ts`: TypeScript definitions for brand configurations and signature data.

## 📖 How to Use

1. **Select Brand**: Choose your primary brand identity from the dropdown menu.
2. **Fill Details**: Enter your Name, Email, Job Title, and Phone numbers in the configuration form.
3. **Verify Preview**: Check the "Live Preview" panel to ensure your information looks correct.
4. **Deploy**:
   - Click **"Copy Signature"** to copy the formatted layout.
   - Go to your email client's settings (e.g., Gmail > Settings > Signature).
   - Paste (Ctrl+V or Cmd+V) into the signature editor.
   - Save changes.

## 📧 Email Compatibility Note

This generator strictly uses `<table>` layouts and inline CSS. This is intentional and necessary because modern CSS (Flexbox/Grid) is not supported by many email rendering engines (like older versions of Outlook). This ensures your professional image remains intact regardless of what device your recipient is using.

---

*© 2026 At World Properties - Professional Signature Systems*