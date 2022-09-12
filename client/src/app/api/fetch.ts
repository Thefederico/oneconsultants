const URL_BASE = "http://localhost:3000";

class FetchData {
  static async get(url: string) {
    const response = await fetch(`${URL_BASE}${url}`);
    return await response.json();
  }

  static async post(url: string, data: any) {
    const response = await fetch(`${URL_BASE}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  static async delete(url: string) {
    const response = await fetch(`${URL_BASE}${url}`, {
      method: "DELETE",
    });
    return await response.json();
  }
}

export { FetchData };
