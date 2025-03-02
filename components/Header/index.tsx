import router from 'next/router';
import { ISite } from '@pinpt/react';
import Link from 'next/link';
import { useState } from 'react';

export interface HeaderProps {
	site: ISite;
}

const Header = (_props: HeaderProps) => {
	const [searchString, setSearchString] = useState<string>();

	const handleSearch = (value: string) => {
		router.push(`/search?term=${encodeURIComponent(value)}`);
	};

	return (
		<>
			<section className="w-full px-8 text-gray-700 bg-white">
				<div className="container flex flex-col flex-wrap items-center justify-between space-y-5 lg:space-y-0 py-5 mx-auto md:flex-row max-w-7xl">
					<div className="relative flex flex-col md:flex-row">
						<Link passHref href="/">
							<span className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0 cursor-pointer">
								<span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
									rickblalock<span className="text-blue-500">.dev</span>
								</span>
							</span>
						</Link>

						<div className="relative group md:mx-5 mb-10 md:mb-0">
							<input
								placeholder="Search"
								type="text"
								onChange={(e) => setSearchString(e.currentTarget.value)}
								onKeyPress={event => {
									if (event.key === 'Enter') {
										handleSearch(searchString || '');
									}
								}}
								className="relative z-10 px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg group-hover:bg-blue-100 cursor-pointer"
							/>
						</div>
					</div>
					
					<div className="inline-flex items-center md:ml-5 space-x-6 lg:justify-end">
						<div className="inline-flex items-center space-x-6 lg:w-2/5 lg:justify-end lg:ml-0">
							<span className="inline-flex justify-center space-x-5 md:ml-auto md:mt-0 md:justify-start">
								<a href="https://twitter.com/rblalock" className="text-gray-400 hover:text-gray-500">
									<span className="sr-only">Twitter</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
								<a href="https://github.com/rblalock" className="text-gray-400 hover:text-gray-500">
									<span className="sr-only">GitHub</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</span>
						</div>

						<Link passHref href="/">
							<span className="text-base font-bold leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 cursor-pointer">
								Entries
							</span>
						</Link>

						<Link passHref href="/entry/iSJWbhPOoknsjqzKmfFL/About-this-site-and-me">
							<span className="text-base font-bold leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 cursor-pointer">
								About
							</span>
						</Link>

						<Link passHref href="/subscription/subscribe">
							<a href="/subscription/subscribe" className="relative h-6 group scale-75 md:scale-100">
								<span className="relative z-10 px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg group-hover:bg-blue-100 cursor-pointer">
									Signup
								</span>
								<span className="absolute top-0 right-0 w-full h-10 -mr-1 bg-black rounded-lg" />
							</a>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
