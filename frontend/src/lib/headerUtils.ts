/**
 * Utility functions for header settings
 */

import { cleanColorValue } from './colorUtils';

export interface HeaderSettings {
  logoSize?: number;
  menuFontSize?: number;
  menuFontColor?: string;
  menuFontWeight?: string;
  backgroundColor?: string;
}

/**
 * Validates and cleans header settings before application
 */
export function validateHeaderSettings(settings: HeaderSettings | undefined): HeaderSettings | null {
  if (!settings) return null;

  const validated: HeaderSettings = {};

  // Validate logo size (20-200px)
  if (settings.logoSize && typeof settings.logoSize === 'number' && 
      settings.logoSize >= 20 && settings.logoSize <= 200) {
    validated.logoSize = Math.round(settings.logoSize);
  }

  // Validate menu font size (12-32px)
  if (settings.menuFontSize && typeof settings.menuFontSize === 'number' && 
      settings.menuFontSize >= 12 && settings.menuFontSize <= 32) {
    validated.menuFontSize = Math.round(settings.menuFontSize);
  }

  // Validate menu font color
  if (settings.menuFontColor) {
    const cleanColor = cleanColorValue(settings.menuFontColor);
    if (cleanColor) {
      validated.menuFontColor = cleanColor;
    }
  }

  // Validate menu font weight
  const validFontWeights = ['light', 'normal', 'medium', 'semibold', 'bold'];
  if (settings.menuFontWeight && validFontWeights.includes(settings.menuFontWeight)) {
    validated.menuFontWeight = settings.menuFontWeight;
  }

  // Validate background color
  if (settings.backgroundColor) {
    const cleanColor = cleanColorValue(settings.backgroundColor);
    if (cleanColor) {
      validated.backgroundColor = cleanColor;
    }
  }

  // Only return validated settings if we have at least one valid setting
  return Object.keys(validated).length > 0 ? validated : null;
}

/**
 * Applies validated header settings to CSS custom properties
 */
export function applyHeaderSettings(settings: HeaderSettings | null): void {
  if (!settings) return;

  try {
    if (settings.logoSize) {
      document.documentElement.style.setProperty('--header-logo-size', `${settings.logoSize}px`);
    }
    if (settings.menuFontSize) {
      document.documentElement.style.setProperty('--header-menu-font-size', `${settings.menuFontSize}px`);
    }
    if (settings.menuFontColor) {
      document.documentElement.style.setProperty('--header-menu-font-color', settings.menuFontColor);
    }
    if (settings.menuFontWeight) {
      document.documentElement.style.setProperty('--header-menu-font-weight', settings.menuFontWeight);
    }
    if (settings.backgroundColor) {
      document.documentElement.style.setProperty('--header-background-color', settings.backgroundColor);
    }
  } catch (error) {
    console.error('Error applying header settings:', error);
  }
}

/**
 * Removes all header CSS custom properties
 */
export function removeHeaderSettings(): void {
  try {
    document.documentElement.style.removeProperty('--header-logo-size');
    document.documentElement.style.removeProperty('--header-menu-font-size');
    document.documentElement.style.removeProperty('--header-menu-font-color');
    document.documentElement.style.removeProperty('--header-menu-font-weight');
    document.documentElement.style.removeProperty('--header-background-color');
  } catch (error) {
    console.error('Error removing header settings:', error);
  }
}
