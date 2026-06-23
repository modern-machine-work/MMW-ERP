async function initDrivePage() {
  const root = document.getElementById('driveBrowser');
  const search = document.getElementById('driveSearch');
  const refresh = document.getElementById('refreshDriveBtn');
  let rows = [];

  function render() {
    const term = search.value.trim().toLowerCase();
    const filtered = rows.filter((row) => JSON.stringify(row).toLowerCase().includes(term));
    if (!filtered.length) {
      root.innerHTML = '<div class="empty-chart">No folders found. Create folders from the Parts screen first.</div>';
      return;
    }

    const byClient = {};
    filtered.forEach((row) => {
      const clientKey = row.ClientLabel || 'Other';
      if (!byClient[clientKey]) byClient[clientKey] = [];
      byClient[clientKey].push(row);
    });

    root.innerHTML = Object.entries(byClient).map(([client, parts]) => `
      <section class="drive-client">
        <h2>${escapeHtml(client)}</h2>
        <div class="drive-part-grid">
          ${parts.map((part) => `
            <article class="drive-part">
              <div>
                <strong>${escapeHtml(part.PartID || part.EntityID)}</strong>
                <span>${escapeHtml(part.PartName || part.FolderName || '')}</span>
              </div>
              <a class="btn small" href="${escapeHtml(part.FolderUrl)}" target="_blank" rel="noopener">Open</a>
            </article>
          `).join('')}
        </div>
      </section>
    `).join('');
  }

  async function load() {
    const [folders, parts, clients] = await Promise.all([
      apiGet('getDriveFolders').catch(() => []),
      apiGet('getParts').catch(() => []),
      apiGet('getClients').catch(() => []),
    ]);
    rows = folders
      .filter((folder) => folder.EntityType === 'Part')
      .map((folder) => {
        const part = parts.find((item) => String(item.PartID) === String(folder.EntityID)) || {};
        const client = clients.find((item) => String(item.ClientCode) === String(part.ClientCode)) || {};
        return {
          ...folder,
          PartID: part.PartID || folder.EntityID,
          PartName: part.PartName || folder.FolderName,
          ClientLabel: part.ClientCode ? `${part.ClientCode} - ${client.ClientName || 'Unknown Client'}` : 'Other',
        };
      });
    render();
  }

  search.addEventListener('input', render);
  refresh.addEventListener('click', load);
  await load();
}
