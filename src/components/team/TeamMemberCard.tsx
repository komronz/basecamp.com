interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  videoUrl: string;
}

export function TeamMemberCard({ name, title, bio, videoUrl }: TeamMemberCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border card-hover">
      <div className="aspect-[9/16] bg-muted">
        <iframe
          src={videoUrl}
          title={`${name} introduction`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-foreground">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
