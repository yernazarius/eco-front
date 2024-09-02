import Image from 'next/image'
import React from 'react'

interface PartnerCardProps {
	id: string
	name: string
	href: string
	imgSrc: string
	imgAlt: string
}

const PartnerCard: React.FC<PartnerCardProps> = ({ id, name, href, imgSrc, imgAlt }) => {
	return (
		<div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3">
			<div className="partner flex flex-col h-full border" id={id}>
				<div className="flex-grow flex justify-center flex-col items-center p-4">
					<a href={href}>
						<Image
							src={imgSrc}
							className="mx-auto block bg-cover bg-center"
							alt={imgAlt}
							width={200}
							height={200}
						/>
					</a>
					<div className="text-center mt-2 p-4">
						<a href={href} className="font-semibold text-center hover:underline">
							{name}
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PartnerCard
