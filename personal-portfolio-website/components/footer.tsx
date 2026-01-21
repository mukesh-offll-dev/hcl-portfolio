export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p>
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  )
}
