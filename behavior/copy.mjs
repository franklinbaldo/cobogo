export function bindCopyActions({
  selector = '[data-copy-target]',
  statusSelector = '#copy-status',
  successLabel = 'Copiado ✓',
  failureLabel = 'Selecione o trecho',
  successMessage = 'Trecho copiado.',
  failureMessage = 'Não foi possível copiar automaticamente. Selecione o trecho acima.',
  successDuration = 1800,
  failureDuration = 2400,
} = {}) {
  if (typeof document === 'undefined') return

  const status = statusSelector ? document.querySelector(statusSelector) : null

  document.querySelectorAll(selector).forEach((copyButton) => {
    if (!(copyButton instanceof HTMLElement) || copyButton.dataset.copyBound === 'true') return
    copyButton.dataset.copyBound = 'true'

    copyButton.addEventListener('click', async () => {
      const targetId = copyButton.getAttribute('data-copy-target')
      const target = targetId ? document.getElementById(targetId) : null
      const text = target?.textContent?.trim()
      if (!text) return

      const originalLabel = copyButton.textContent || 'Copiar'
      const originalAriaLabel = copyButton.getAttribute('aria-label')

      const restore = () => {
        copyButton.textContent = originalLabel
        if (originalAriaLabel === null) copyButton.removeAttribute('aria-label')
        else copyButton.setAttribute('aria-label', originalAriaLabel)
      }

      try {
        await navigator.clipboard.writeText(text)
        copyButton.textContent = successLabel
        copyButton.setAttribute('aria-label', 'Trecho copiado')
        if (status) status.textContent = successMessage
        window.setTimeout(restore, successDuration)
      } catch {
        copyButton.textContent = failureLabel
        if (status) status.textContent = failureMessage
        window.setTimeout(restore, failureDuration)
      }
    })
  })
}
