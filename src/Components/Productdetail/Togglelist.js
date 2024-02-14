import React, { useState } from 'react'

function Togglelist() {

    const [activetab, setactivetab] = useState([true, false, false])

    return (
        <div>
            <div className="mt-4 description_para">
                <div className="d-flex button_para">
                    <div style={{ margin: '10px' }}>
                        <button type="button" className=
                            {activetab[0] ? " btn_active btn" : "btn_non btn "}
                            onClick={() => {
                                setactivetab([true, false, false])
                            }}>Descriptions
                        </button>
                        <button type="button" className=
                            {activetab[1] ? " btn_active btn" : "btn_non btn "} onClick={() => {
                                setactivetab([false, true, false])
                            }}>Reviews(3)
                        </button>
                        <button type="button" className=
                            {activetab[2] ? " btn_active btn" : "btn_non btn "} onClick={() => {
                                setactivetab([false, false, true])
                            }} >SSS</button>
                    </div>
                </div>
                <div>

                    {
                        activetab[0] ?
                            <div className="description">
                                <p class="font-weight-bold">Where was he raised?</p>
                                <p>
                                    Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris
                                    feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla.
                                    Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum
                                    primis in
                                    faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus
                                    mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus
                                    consectetur.
                                    Maecenas facilisis eros ac felis mattis, egetauctor sapien varius.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
                                    dolorum
                                    earum fugiat nostrum obcaecati, quis ratione rerum sapiente soluta!
                                </p>
                                <p class="font-weight-bold">Chemicals in</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
                                    reiciendis!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi, aperiam
                                    corporis, dolorum fugiat fugit maxime nisi optio quo similique sit sunt tempora.
                                    Commodi culpa debitis deleniti dolore maiores, maxime praesentium. Autem dicta
                                    dolore ipsum molestiae quae, quasi soluta tempora.
                                </p>
                            </div> : null
                    }

                    {
                        activetab[1] ? <div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="mb-5">
                                        <div className="display-6">4.0</div>
                                        <div className="d-flex gap-2 my-3">
                                            <i class="fa-solid fa-star icon-lg text-warning"></i>
                                            <i class="fa-solid fa-star icon-lg text-warning"></i>
                                            <i class="fa-solid fa-star icon-lg text-warning"></i>
                                            <i class="fa-solid fa-star icon-lg text-warning"></i>
                                            <i class="fa-solid fa-star icon-lg text-warning"></i>
                                            <i class="fa-solid fa-star icon-lg text-muted"></i>
                                            <span>(3)</span>
                                        </div>
                                    </div>
                                    <div className="list-group list-group-flush mb-4">
                                        <div className="list-group-item d-flex px-0">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-text bg-purple rounded-circle">R</span>
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Rodger Stutely</h5>
                                                <div className="d-flex gap-2 mb-3">
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-muted"></i>
                                                </div>
                                                <div>I love your products. It is very easy and fun to use this panel. I would
                                                    recommend it
                                                    to
                                                    everyone.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex px-0">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-text bg-orange rounded-circle">C</span>
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Corly Hailston</h5>
                                                <div className="d-flex gap-2 mb-3">
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-muted"></i>
                                                </div>
                                                <div>I love your products. It is very easy and fun to use this panel. I would
                                                    recommend it
                                                    to
                                                    everyone.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item d-flex px-0">
                                            <div class="avatar flex-shrink-0 me-3">
                                                <span class="avatar-text bg-orange rounded-circle">C</span>
                                            </div>
                                            <div>
                                                <h5 class="mb-1">Hurleigh Smallcomb</h5>
                                                <div class="d-flex gap-2 mb-3">
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                                    <i class="fa-solid fa-star icon-lg text-muted"></i>
                                                </div>
                                                <div>I love your products. It is very easy and fun to use this panel. I would
                                                    recommend it
                                                    to
                                                    everyone.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label">Comment:</label>
                                            <textarea rows="3" class="form-control" placeholder="Your opinion on the product"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Rate:</label>
                                            <div class="d-flex align-items-center">
                                                <button class="btn btn-primary mt-3" type="button" id="button-addon2">Send Review</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> : null
                    }

                    {
                        activetab[2] ? <div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How are the delivery processes carried out?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Is there a payment option at the door?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How many can I order at the same time?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }

                </div>

            </div>
        </div >
    )
}

export default Togglelist
