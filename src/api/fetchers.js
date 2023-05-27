const API = process.env.REACT_APP_API;

export async function sendAudioQuery({ blob, blobCleanerCallback }) {
  const formData = new FormData();
  formData.append("audio", blob, "audio.wav");

  try {
    blobCleanerCallback();
  } catch {}

  const response = await fetch(`${API}query-song`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();

    let songs = [];
    for (var song in data) {
      songs.push([song, data[song]]);
    }

    songs.sort(function (a, b) {
      return b[1] - a[1];
    });

    return songs;
  } else {
    throw new Error("Error sending audio query");
  }
}
