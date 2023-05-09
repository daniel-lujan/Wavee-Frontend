export async function sendAudioQuery({ blob }) {
  const formData = new FormData();
  formData.append("audio", blob, "audio.wav");
  const response = await fetch("http://localhost:5000/query-song", {
    method: "POST",
    body: formData,
  });
  return response.json();
}
