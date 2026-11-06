# CampusCode – React + Vite

The original HTML/CSS website rewritten as a React application. Design is unchanged.

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Pages
| URL                  | Page (original file)                    |
|----------------------|-----------------------------------------|
| `/`                  | Dashboard landing page                  |
| `/login`             | Login                                   |
| `/register`          | Register                                |
| `/student`           | Student Dashboard (Overview)            |
| `/student/events`    | Events                                  |
| `/student/my-events` | My Events                               |

## Structure
```
src/
  main.jsx / App.jsx        entry point + route table
  pages/                    one component per page
  components/
    common/BrandLogo        Dashboard header symbol (Dashboard, Register, Login)
    landing/                sections of the landing page
    auth/                   pieces shared by Register + Login
    student/Sidebar         ONE sidebar (Student Dashboard, Events, My Events)
    events/                 banner + top bar shared by Events + My Events
  styles/
    shared/                 brand-logo.css, sidebar.css, auth.css (used by several pages)
    pages/                  landing.css, login.css, student-dashboard.css, events.css
  hooks/usePageStyles.js    loads a page's CSS only while that page is shown
  data/eventsData.js        event card content
  assets/                   showcase video
```

## How CSS works here
The original pages reuse class names (`.hero`, `.header`, `.sidebar`, `:root`...) with
different values, so loading all CSS at once would change the design. `usePageStyles`
adds a page's stylesheet while it is on screen and removes it afterwards, so each page
gets exactly its original CSS. Shared CSS (logo, sidebar, auth) is loaded by the shared
component that needs it.
