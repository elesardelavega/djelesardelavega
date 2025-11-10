import { useEffect, useState } from 'react';

export function useLatestSoundcloud() {
  const [track, setTrack] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/soundcloud/latest')
      .then((r) => r.json())
      .then(setTrack)
      .catch(console.error);
  }, []);

  return track;
}
