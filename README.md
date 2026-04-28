# CR Electric LLC — Demo Site

Sample demo site for **CR Electric LLC**, a licensed electrical contractor
in Springfield. This is a polished sample built to show a prospective client
what their finished site could look like.

> Sample demo site. Final design and content will be customized for your
> business.

- Owner: John Smith, Master Electrician
- Phone: (555) 010-2000
- Email: hello@crelectricllc.com
- Address: 123 Main Street, Springfield

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- React Router

## Local development

```sh
npm install
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080).

## Build

```sh
npm run build      # production build
npm run preview    # preview the production build locally
```

## Project layout

```
src/
  components/   # Navbar, Footer, ContactForm, ChatWidget, Reveal, ui/
  pages/        # Index, NotFound
  hooks/        # use-mobile, use-toast
  lib/          # utils
  index.css     # design tokens + animations
  App.tsx       # routes
```

## TODOs before launch

- Wire `ContactForm` to a real webhook (`WEBHOOK_URL` constant in `src/components/ContactForm.tsx`)
- Wire `ChatWidget` to the real chat provider
- Replace the sample testimonial with real customer reviews
- Add a real favicon to `/public`
