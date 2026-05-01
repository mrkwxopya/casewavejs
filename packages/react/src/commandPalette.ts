export interface CaseWaveCommand {
  id: string;
  title: string;
  keywords?: string[];
  run: () => void;
}

export function filterCommands(
  commands: CaseWaveCommand[],
  query: string
): CaseWaveCommand[] {
  const q = query.trim().toLowerCase();

  if (!q) return commands;

  return commands.filter((command) => {
    if (command.title.toLowerCase().includes(q)) return true;

    return (command.keywords ?? []).some((keyword) =>
      keyword.toLowerCase().includes(q)
    );
  });
}




