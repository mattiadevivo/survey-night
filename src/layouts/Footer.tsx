import Social from '../components/Social';
import { logoPath } from './common';

export default function Footer() {
  return (
    <footer className="py-16 text-sm leading-6 bg-stone-200">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="mt-16 flex flex-col lg:flex-row justify-between text-center">
          <div className="flex lg:flex-1 justify-center lg:justify-start">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-16 w-auto rounded-full"
                src={logoPath}
                alt="logo"
              />
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end space-x-2 py-6">
            <Social />
          </div>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row justify-between text-center">
          <div className="pt-10">
            Contacts{' '}
            <a href="mailto: info.surveynight@gmail.com" className="block">
              <span className="text-accent font-bold">
                info.surveynight@gmail.com
              </span>
            </a>
          </div>
          <div className="pt-10 capitalize">
            &#169; survey night {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
