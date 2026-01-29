import React from 'react';
import { cn } from '../utils/cn';
import { Tooltip } from './Tooltip';

export interface FormFieldLabelProps {
  /**
   * Label text atau ReactNode (komponen/JSX).
   */
  label?: React.ReactNode;
  /**
   * Jika true, tampilkan asterisk merah (*) setelah label.
   */
  isMandatory?: boolean;
  /**
   * Jika true, tampilkan icon informasi dengan tooltip.
   */
  showTooltip?: boolean;
  /**
   * Isi tooltip saat showTooltip true. Komponen/ReactNode.
   */
  tooltipInformation?: React.ReactNode;
  /**
   * htmlFor untuk mengikat label ke input (optional).
   */
  htmlFor?: string;
  /**
   * id untuk elemen label (optional, untuk aria-labelledby).
   */
  id?: string;
  className?: string;
}

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

/**
 * Label baris form: label + (opsional) asterisk wajib + (opsional) icon info dengan tooltip.
 * Urutan: Label * (info)
 */
export const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  label,
  isMandatory = false,
  showTooltip = false,
  tooltipInformation,
  htmlFor,
  id,
  className,
}) => {
  const hasLabelContent = label != null && label !== '';
  const hasTooltip = showTooltip && tooltipInformation != null && tooltipInformation !== '';
  const showRow = hasLabelContent || isMandatory || hasTooltip;

  if (!showRow) return null;

  const content = (
    <>
      {hasLabelContent && <span className="min-w-0">{label}</span>}
      {isMandatory && <span className="text-error-600 shrink-0" aria-hidden>*</span>}
      {hasTooltip && (
        <Tooltip title={tooltipInformation} position="top">
          <button
            type="button"
            className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-[#0065e9] hover:text-[#0052b8] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-300"
            aria-label="Information"
          >
            <InfoIcon />
          </button>
        </Tooltip>
      )}
    </>
  );

  const wrapperClass = cn('flex items-center gap-1.5 text-sm font-medium text-neutral-700', className);

  if (htmlFor) {
    return (
      <label id={id} htmlFor={htmlFor} className={wrapperClass}>
        {content}
      </label>
    );
  }

  return (
    <div id={id} className={wrapperClass} role="group">
      {content}
    </div>
  );
};

FormFieldLabel.displayName = 'FormFieldLabel';
