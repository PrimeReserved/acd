import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  objectPosition?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  tag,
  objectPosition = 'top',
}: PageHeroProps) {
  return (
    <section className="relative h-72 sm:h-[340px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ objectPosition }}
          priority
        />
        {/* Brochure gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(155deg, rgba(15,52,96,0.94) 0%, rgba(139,21,21,0.88) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-left, aligned with logo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pb-8 sm:pb-10">
        {tag && (
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-[3px] h-4 bg-orange rounded-sm inline-block" />
            <span className="text-white text-[10px] font-bold tracking-[0.25em] uppercase">
              {tag}
            </span>
          </div>
        )}
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3 leading-tight">
          {title}
        </h1>
        <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-orange via-amber to-transparent" />
    </section>
  );
}
