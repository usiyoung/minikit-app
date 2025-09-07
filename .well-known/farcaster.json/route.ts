function withValidProperties(
  properties: Record<string, undefined | string | string[]>,
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return !!value;
    }),
  );
}

export async function GET() {
  try {
    const URL = process.env.NEXT_PUBLIC_URL || 'https://aurora-mini-app.netlify.app';

    // 디버깅을 위한 로그 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.log('Environment variables check:', {
        NEXT_PUBLIC_URL: URL,
        FARCASTER_HEADER: process.env.FARCASTER_HEADER ? 'SET' : 'NOT SET',
        FARCASTER_PAYLOAD: process.env.FARCASTER_PAYLOAD ? 'SET' : 'NOT SET',
        FARCASTER_SIGNATURE: process.env.FARCASTER_SIGNATURE ? 'SET' : 'NOT SET',
      });
    }

    // 필수 환경 변수 체크
    if (!URL) {
      return Response.json(
        { error: "NEXT_PUBLIC_URL environment variable is required" },
        { status: 500 }
      );
    }

    return Response.json({
      accountAssociation: {
        header: process.env.FARCASTER_HEADER,
        payload: process.env.FARCASTER_PAYLOAD,
        signature: process.env.FARCASTER_SIGNATURE,
      },
      frame: withValidProperties({
        version: "1",
        name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
        subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE,
        description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        screenshotUrls: [],
        iconUrl: process.env.NEXT_PUBLIC_APP_ICON,
        splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE,
        splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
        homeUrl: URL,
        webhookUrl: `${URL}/api/webhook`,
        primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY,
        tags: [],
        heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
        tagline: process.env.NEXT_PUBLIC_APP_TAGLINE,
        ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE,
        ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION,
        ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE,
      }),
    });
  } catch (error) {
    console.error("Error in farcaster.json route:", error);
    return Response.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
