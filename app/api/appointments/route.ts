import { NextRequest, NextResponse } from "next/server";

import { ensureAppointmentsTable, listAppointmentsForMonth } from "../../../lib/appointments";

export async function GET(request: NextRequest) {
  const month = request.nextUrl.searchParams.get("month") || "";

  if (!/^\d{4}-\d{2}$/.test(month)) {
    return NextResponse.json({ error: "Ungültiger Monat." }, { status: 400 });
  }

  try {
    await ensureAppointmentsTable();
    const appointments = await listAppointmentsForMonth(month);
    return NextResponse.json({ appointments });
  } catch (error) {
    console.error("Appointments GET error:", error);
    return NextResponse.json(
      { error: "Termine konnten nicht geladen werden." },
      { status: 500 },
    );
  }
}
